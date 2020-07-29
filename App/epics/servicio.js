import {ofType} from 'redux-observable';
import {of, from} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import axios from 'axios';

import {combineEpics} from 'redux-observable';
import {
  SERVICIO_FETCHING_DATA,
  servicioFetchSucces,
  servicioFetchFailed,
} from '../actions/servicio';

const fetchServiciosEpic = (action$, state$) =>
  action$.pipe(
    ofType(SERVICIO_FETCHING_DATA),
    mergeMap((action) =>
      from(
        axios.get(`${process.env.api}/admon/solicitud-status`, {
          headers: {
            Authorization: `Token ${state$.value.auth.token}`,
          },
        }),
      ).pipe(
        map((response) => servicioFetchSucces(response)),
        catchError((error) => of(servicioFetchFailed(error))),
      ),
    ),
  );

export const servicioEpics = combineEpics(fetchServiciosEpic);
