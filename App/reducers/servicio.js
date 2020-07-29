import {
  SERVICIO_FETCH_SUCCESS,
  SERVICIO_FETCHING_DATA,
  SERVICIO_FETCH_FAILED,
} from '../actions/servicio';

const servicioState = {
  data: null,
  fetching: false,
  error: '',
};

export const servicioReducer = (state = servicioState, {type, payload}) => {
  switch (type) {
    case SERVICIO_FETCH_SUCCESS:
      return {
        ...state,
        data: payload.results,
        fetching: false,
      };
    case SERVICIO_FETCHING_DATA:
      return {
        ...state,
        fetching: true,
      };
    case SERVICIO_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload.error,
      };

    default:
      return state;
  }
};
