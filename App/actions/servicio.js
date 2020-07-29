export const SERVICIO_FETCH_SUCCESS = '@servicio/SUCCESS';
export const SERVICIO_FETCH_FAILED = '@servicio/FAILED';
export const SERVICIO_FETCHING_DATA = '@servicio/FETCHING_DATA';
// export const SERVICIO_SELECTED = '@servicio/SELECTED';

export const servicioFetch = () => ({
  type: SERVICIO_FETCHING_DATA,
});

// export const servicioSelect = (payload) => ({
//   type: SERVICIO_SELECTED,
//   payload,
// });

export const servicioFetchSucces = (payload) => ({
  type: SERVICIO_FETCH_SUCCESS,
  payload,
});

export const servicioFetchFailed = (payload) => ({
  type: SERVICIO_FETCH_FAILED,
  payload,
});
