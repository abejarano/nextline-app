import {combineEpics} from 'redux-observable';
import {catchError} from 'rxjs/operators';
import {authEpics} from './auth';
const epics = [authEpics];
export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );
