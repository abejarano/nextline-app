import {ofType} from 'redux-observable';
import {from, of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
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
      from(AsyncStorage.setItem('nl-token', action.payload.token)).pipe(
        map(() => tokenSaved(action.payload.token)),
        catchError((error) => of(tokenSaveFailed(error))),
      ),
    ),
  );

const signoutEpic = (action$) =>
  action$.pipe(
    ofType(SIGNOUT),
    mergeMap((action) =>
      from(AsyncStorage.removeItem('nl-token')).pipe(
        map(() => signoutSuccess()),
        catchError((error) => of(signoutFailed(error))),
      ),
    ),
  );

const checkTokenStorageEpic = (action$) =>
  action$.pipe(
    ofType(STORAGE_CHECK_TOKEN),
    mergeMap((action) =>
      from(AsyncStorage.getItem('nl-token')).pipe(
        map((token) => tokenSaved(token)),
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
          plan: action.payload.plan.id,
          latitud: action.payload.position.altitude,
          longitud: action.payload.position.logitude,
        }),
      ).pipe(
        map((response) => signupSuccess(response.data)),
        catchError((error) => {
          let errorMsg = '';
          console.log({
            ...state$.value.auth.user,
            plan: action.payload.plan.id,
            latitud: action.payload.position.altitude,
            longitud: action.payload.position.logitude,
          });
          console.log(error.response.data);
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
