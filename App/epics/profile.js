import {ofType} from 'redux-observable';
import {from, of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {
  PROFILE_SENDING_DATA,
  LOAD_PROFILE,
  updateProfileSuccess,
  updateProfileFailed,
  loadProfileSuccess,
  loadProfileFailed,
} from '../actions/profile';
import {combineEpics} from 'redux-observable';
import axios from 'axios';

const loadProfileEpic = (action$, state$) =>
  action$.pipe(
    ofType(LOAD_PROFILE),
    mergeMap((action) =>
      from(
        axios.get(`${process.env.api}/admon/perfil`, {
          headers: {
            Authorization: `Token ${state$.value.auth.token}`,
          },
        }),
      ).pipe(
        map((response) => loadProfileSuccess(response)),
        catchError((error) => of(loadProfileFailed(error))),
      ),
    ),
  );

const updateProfileEpic = (action$, state$) =>
  action$.pipe(
    ofType(PROFILE_SENDING_DATA),
    mergeMap((action) =>
      from(
        axios.post(`${process.env.api}/admon/perfil/`, action.payload, {
          headers: {
            Authorization: `Token ${state$.value.auth.token}`,
          },
        }),
      ).pipe(
        map((response) => updateProfileSuccess(response.data)),
        catchError((error) => of(updateProfileFailed(error))),
      ),
    ),
  );

export const profileEpics = combineEpics(loadProfileEpic, updateProfileEpic);
