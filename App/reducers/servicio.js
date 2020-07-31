import {
  SERVICIO_FETCH_SUCCESS,
  SERVICIO_FETCHING_DATA,
  SERVICIO_FETCH_FAILED,
  SERVICIO_STATUS_FETCH_SUCCESS,
  SERVICIO_STATUS_FETCHING_DATA,
  SERVICIO_STATUS_FETCH_FAILED,
} from '../actions/servicio';

const servicioState = {
  data: [],
  fetching: false,
  error: '',
  status: {
    data: null,
    fetching: false,
    error: '',
  },
};

export const servicioReducer = (state = servicioState, {type, payload}) => {
  switch (type) {
    case SERVICIO_FETCH_SUCCESS:
      return {
        ...state,
        data: payload,
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
    case SERVICIO_STATUS_FETCH_SUCCESS:
      return {
        ...state,
        status: {
          data: payload,
          fetching: false,
        },
      };
    case SERVICIO_STATUS_FETCHING_DATA:
      return {
        ...state,
        status: {
          fetching: true,
        },
      };
    case SERVICIO_STATUS_FETCH_FAILED:
      return {
        ...state,
        status: {
          fetching: false,
          error: payload.error,
        },
      };

    default:
      return state;
  }
};
