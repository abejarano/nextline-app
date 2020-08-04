import {actionGenerator} from './utils';

export const SERVICIO_FETCH_SUCCESS = '@servicio/SUCCESS';
export const SERVICIO_FETCH_FAILED = '@servicio/FAILED';
export const SERVICIO_FETCHING_DATA = '@servicio/FETCHING_DATA';
export const SERVICIO_SELECTED = '@servicio/SERVICIO_SELECTED';
export const SERVICIO_STATUS_FETCH_SUCCESS = '@servicio/status/SUCCESS';
export const SERVICIO_STATUS_FETCH_FAILED = '@servicio/status/FAILED';
export const SERVICIO_STATUS_FETCHING_DATA = '@servicio/status/FETCHING_DATA';

export const CONTRATO_STATUS_FETCH_SUCCESS = '@contrato/status/SUCCESS';
export const CONTRATO_STATUS_FETCH_FAILED = '@contrato/status/FAILED';
export const CONTRATO_STATUS_FETCHING_DATA = '@contrato/status/FETCHING_DATA';

export const servicioFetch = actionGenerator(SERVICIO_FETCHING_DATA);

export const servicioSelect = actionGenerator(SERVICIO_SELECTED);

export const servicioFetchSucces = actionGenerator(SERVICIO_FETCH_SUCCESS);

export const servicioFetchFailed = actionGenerator(SERVICIO_FETCH_FAILED);

export const servicioStatusFetch = actionGenerator(
  SERVICIO_STATUS_FETCHING_DATA,
);

export const servicioStatusFetchSucces = actionGenerator(
  SERVICIO_STATUS_FETCH_SUCCESS,
);

export const servicioStatusFetchFailed = actionGenerator(
  SERVICIO_STATUS_FETCH_FAILED,
);

export const contratoStatusFetch = actionGenerator(
  CONTRATO_STATUS_FETCHING_DATA,
);

export const contratoStatusFetchSucces = actionGenerator(
  CONTRATO_STATUS_FETCH_SUCCESS,
);

export const contratoStatusFetchFailed = actionGenerator(
  CONTRATO_STATUS_FETCH_FAILED,
);
