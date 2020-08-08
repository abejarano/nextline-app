import {combineEpics} from 'redux-observable';
import {catchError} from 'rxjs/operators';
import {authEpics} from './auth';
import {planEpics} from './plan';
import {servicioEpics} from './servicio';
import {profileEpics} from './profile';
import {fcmEpics} from './fcm';
import {failureCategoriesEpic} from './failuresCategories';
const epics = [authEpics, planEpics, servicioEpics, profileEpics, fcmEpics, failureCategoriesEpic];
export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );
