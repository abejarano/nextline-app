import {ofType} from 'redux-observable';
import {of, from} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import axios from 'axios';

import {combineEpics} from 'redux-observable';
import {
  SERVICIO_FETCHING_DATA,
  servicioFetchSucces,
  servicioFetchFailed,
  SERVICIO_STATUS_FETCHING_DATA,
  servicioStatusFetchSucces,
  servicioStatusFetchFailed,
} from '../actions/servicio';

const fetchServicioStatusEpic = (action$, state$) =>
  action$.pipe(
    ofType(SERVICIO_STATUS_FETCHING_DATA),
    mergeMap((action) =>
      from(
        axios.get(`${process.env.api}/admon/solicitud-status`, {
          headers: {
            Authorization: `Token ${state$.value.auth.token}`,
          },
        }),
      ).pipe(
        map((response) => servicioStatusFetchSucces(response.data)),
        catchError((error) => of(servicioStatusFetchFailed(error))),
      ),
    ),
  );

const fetchServiciosEpic = (action$, state$) =>
  action$.pipe(
    ofType(SERVICIO_FETCHING_DATA),
    mergeMap((action) =>
      from(axios.get(`${process.env.api}/config/tipo-servicios/`)).pipe(
        map((response) => servicioFetchSucces(response.data.results)),
        catchError((error) => of(servicioFetchFailed(error))),
      ),
    ),
  );

export const servicioEpics = combineEpics(
  fetchServiciosEpic,
  fetchServicioStatusEpic,
);
