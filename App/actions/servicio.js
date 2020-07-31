export const SERVICIO_FETCH_SUCCESS = '@servicio/SUCCESS';
export const SERVICIO_FETCH_FAILED = '@servicio/FAILED';
export const SERVICIO_FETCHING_DATA = '@servicio/FETCHING_DATA';
export const SERVICIO_SELECTED = '@servicio/SERVICIO_SELECTED';
export const SERVICIO_STATUS_FETCH_SUCCESS = '@servicio/status/SUCCESS';
export const SERVICIO_STATUS_FETCH_FAILED = '@servicio/status/FAILED';
export const SERVICIO_STATUS_FETCHING_DATA = '@servicio/status/FETCHING_DATA';

export const servicioFetch = () => ({
  type: SERVICIO_FETCHING_DATA,
});

export const servicioSelect = (payload) => ({
  type: SERVICIO_SELECTED,
  payload,
});

export const servicioFetchSucces = (payload) => ({
  type: SERVICIO_FETCH_SUCCESS,
  payload,
});

export const servicioFetchFailed = (payload) => ({
  type: SERVICIO_FETCH_FAILED,
  payload,
});

export const servicioStatusFetch = () => ({
  type: SERVICIO_STATUS_FETCHING_DATA,
});

export const servicioStatusFetchSucces = (payload) => ({
  type: SERVICIO_STATUS_FETCH_SUCCESS,
  payload,
});

export const servicioStatusFetchFailed = (payload) => ({
  type: SERVICIO_STATUS_FETCH_FAILED,
  payload,
});
