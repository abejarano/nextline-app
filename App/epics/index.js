import {combineEpics} from 'redux-observable';
import {catchError} from 'rxjs/operators';
import {authEpics} from './auth';
import {planEpics} from './plan';
import {servicioEpics} from './servicio';
import {profileEpics} from './profile';
const epics = [authEpics, planEpics, servicioEpics, profileEpics];
export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );
