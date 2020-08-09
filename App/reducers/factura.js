import {
  FACTURA_SELECTED,
  FACTURA_FETCH_SUCCESS,
  FACTURA_FETCHING_DATA,
  FACTURA_FETCH_FAILED,
} from '../actions/factura';
import {RESET_STORE} from '../actions/utils';

const facturaState = {
  data: [],
  fetching: false,
  error: '',
  selected: {
    status: null,
    fecha_vencimiento: null,
    total: null,
  },
};

export const facturaReducer = (state = facturaState, {type, payload}) => {
  switch (type) {
    case FACTURA_FETCH_SUCCESS:
      return {
        ...state,
        data: payload.results,
        fetching: false,
      };
    case FACTURA_FETCHING_DATA:
      return {
        ...state,
        fetching: true,
      };
    case FACTURA_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload.error,
      };

    case FACTURA_SELECTED:
      return {
        ...state,
        selected: payload,
      };
    case RESET_STORE:
      return facturaState;
    default:
      return state;
  }
};
