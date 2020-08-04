import {ofType} from 'redux-observable';
import {from, of} from 'rxjs';
import {mergeMap, map, catchError, switchMap} from 'rxjs/operators';
import {
  LOGIN_SENDING_DATA,
  loginSuccess,
  loginFailed,
  signupSuccess,
  signupFailed,
  LOGIN_SUCCESS,
  tokenSaved,
  tokenSaveFailed,
  STORAGE_CHECK_TOKEN,
  SIGNOUT,
  signoutSuccess,
  signoutFailed,
  SIGNUP_SENDING_DATA,
  tokenReaded,
} from '../actions/auth';
import {combineEpics} from 'redux-observable';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN_SENDING_DATA),
    mergeMap((action) =>
      from(axios.post(`${process.env.api}/config/auth/`, action.payload)).pipe(
        map((response) => loginSuccess(response.data)),
        catchError((error) => {
          let errorMsg = '';
          if (
            error.response.data.email &&
            !Array.isArray(error.response.data.email)
          ) {
            errorMsg = error.response.data.email;
          } else {
            if (error.response.data.clave) {
              errorMsg = error.response.data.clave[0];
            }
          }
          return of(loginFailed(errorMsg));
        }),
      ),
    ),
  );

const loginStorageEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN_SUCCESS),
    mergeMap((action) =>
      from(
        AsyncStorage.multiSet([
          ['nl-token', action.payload.token],
          ['nl-isClient', action.payload.es_cliente + ''],
        ]),
      ).pipe(
        map(() => tokenSaved(action.payload.token)),
        catchError((error) => of(tokenSaveFailed(error))),
      ),
    ),
  );

const signoutEpic = (action$) =>
  action$.pipe(
    ofType(SIGNOUT),
    mergeMap((action) =>
      from(AsyncStorage.multiRemove(['nl-token', 'nl-isClient'])).pipe(
        map(() => signoutSuccess()),
        catchError((error) => of(signoutFailed(error))),
      ),
    ),
  );

const checkTokenStorageEpic = (action$) =>
  action$.pipe(
    ofType(STORAGE_CHECK_TOKEN),
    mergeMap((action) =>
      from(AsyncStorage.multiGet(['nl-token', 'nl-isClient'])).pipe(
        map((data) => tokenReaded(data)),
        catchError((error) => of(tokenSaveFailed(error))),
      ),
    ),
  );

const signupEpic = (action$, state$) =>
  action$.pipe(
    ofType(SIGNUP_SENDING_DATA),
    mergeMap((action) =>
      from(
        axios.post(`${process.env.api}/admon/service-request`, {
          ...state$.value.auth.user,
          plan: state$.value.plans.selected.id,
          direccion: action.payload,
        }),
      ).pipe(
        map((response) => signupSuccess(response)),
        catchError((error) => {
          let errorMsg = '';

          console.log(error.response);
          if (
            error.response.data.email &&
            !Array.isArray(error.response.data.email)
          ) {
            errorMsg = error.response.data.email;
          } else {
            if (error.response.data.clave) {
              errorMsg = error.response.data.clave[0];
            }
          }
          return of(signupFailed(errorMsg));
        }),
      ),
    ),
  );

export const authEpics = combineEpics(
  loginEpic,
  signupEpic,
  loginStorageEpic,
  checkTokenStorageEpic,
  signoutEpic,
);
