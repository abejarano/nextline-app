import {ofType} from 'redux-observable';
import {from, of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {
  LOGIN_SENDING_DATA,
  loginSucces,
  loginFailed,
  SIGNUP_SENDING_DATA,
  signupSucces,
  signupFailed,
} from '../actions/auth';
import {combineEpics} from 'redux-observable';
import axios from 'axios';

const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN_SENDING_DATA),
    mergeMap((action) =>
      from(axios.post(`${process.env.api}/config/auth/`, action.payload)).pipe(
        map((response) => loginSucces(response)),
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

const signupEpic = (action$) =>
  action$.pipe(
    ofType(SIGNUP_SENDING_DATA),
    mergeMap((action) =>
      ajax
        .post(`${process.env.api}​/admon​/service-request`, action.payload)
        .pipe(
          map((response) => signupSucces(response)),
          catchError((error) => of(signupFailed(error))),
        ),
    ),
  );

export const authEpics = combineEpics(loginEpic, signupEpic);
