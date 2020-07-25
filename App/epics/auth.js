import {ofType} from 'redux-observable';
import {} from 'rxjs';
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

const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN_SENDING_DATA),
    mergeMap((action) =>
      ajax.post(`${process.env.api}/login`).pipe(
        map((response) => loginSucces(response)),
        catchError((error) => loginFailed(error)),
      ),
    ),
  );

const signupEpic = (action$) =>
  action$.pipe(
    ofType(SIGNUP_SENDING_DATA),
    mergeMap((action) =>
      ajax.post(`${process.env.api}/signup`).pipe(
        map((response) => signupSucces(response)),
        catchError((error) => signupFailed(error)),
      ),
    ),
  );

export const authEpics = combineEpics(loginEpic, signupEpic);
