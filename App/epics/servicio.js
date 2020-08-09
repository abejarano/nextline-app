import {ofType} from 'redux-observable';
import {of, from} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import axios from 'axios';

import {combineEpics} from 'redux-observable';
import {
  SERVICIO_FETCHING_DATA,
  CONTRATO_STATUS_FETCHING_DATA,
  SERVICIO_STATUS_FETCHING_DATA,
  servicioFetchSucces,
  servicioFetchFailed,
  servicioStatusFetchSucces,
  servicioStatusFetchFailed,
  contratoStatusFetchSucces,
  contratoStatusFetchFailed,
  servicioSelect,
} from '../actions/servicio';
import {planSelect} from '../actions/plan';
import {loadProfileSuccess} from '../actions/profile';
import {signout} from '../actions/auth';
import {facturaSelect} from '../actions/factura';

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

const fetchContratoStatusEpic = (action$, state$) =>
  action$.pipe(
    ofType(CONTRATO_STATUS_FETCHING_DATA),
    mergeMap((action) =>
      from(
        axios.get(`${process.env.api}/admon/contratos-status`, {
          headers: {
            Authorization: `Token ${state$.value.auth.token}`,
          },
        }),
      ).pipe(
        mergeMap((response) => {
          return of(
            contratoStatusFetchSucces(response.data.contratos[0]),
            loadProfileSuccess(response.data.cliente),
            planSelect(response.data.contratos[0].plan),
            facturaSelect(response.data.factura),
            servicioSelect(response.data.contratos[0].plan.tipo_servicio),
          );
        }),
        catchError((error) =>
          of(contratoStatusFetchFailed(error), signout(error)),
        ),
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
  fetchContratoStatusEpic,
);
