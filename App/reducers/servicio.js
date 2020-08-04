import {
  SERVICIO_FETCH_SUCCESS,
  SERVICIO_FETCHING_DATA,
  SERVICIO_FETCH_FAILED,
  SERVICIO_STATUS_FETCH_SUCCESS,
  SERVICIO_STATUS_FETCHING_DATA,
  SERVICIO_STATUS_FETCH_FAILED,
  SERVICIO_SELECTED,
} from '../actions/servicio';
import {RESET_STORE} from '../actions/utils';

const servicioState = {
  data: [],
  fetching: false,
  error: '',
  status: {
    data: {
      contratos: [],
      solicitud_servicio: null,
    },
    fetching: false,
    error: '',
  },
  selected: {
    activo: null,
    id: null,
    servicio: '',
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
          ...state.status,
          fetching: true,
        },
      };
    case SERVICIO_STATUS_FETCH_FAILED:
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          error: payload.error,
        },
      };
    case SERVICIO_SELECTED:
      return {
        ...state,
        selected: {
          ...state.selected,
          ...payload,
        },
      };

    case RESET_STORE:
      return servicioState;
    default:
      return state;
  }
};
