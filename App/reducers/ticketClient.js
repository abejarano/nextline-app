import {
  FETCH_TICKETS_CLIENT,
  SUCCESS_FETCH_TICKETS_CLIENT,
  FAILED_FECTH_TICKET_CLIENT,
  CREATE_TICKET_CLIENT,
  SUCCESS_CREATE_TICKET_CLIENT,
  FAILED_CREATE_TICKET_CLIENT,
} from '../actions/ticketsClients';
import {RESET_STORE} from '../actions/utils';

const ticketClientState = {
  data: null,
  fetching: false,
  error: '',
};

export const ticketClientReducer = (
  state = ticketClientState,
  {type, payload},
) => {
  switch (type) {
    case CREATE_TICKET_CLIENT:
      return {
        ...state,
        data: payload,
        fetching: true,
      };

    case SUCCESS_CREATE_TICKET_CLIENT:
      return {
        ...state,
        data: payload,
        fetching: false,
      };
    case FAILED_CREATE_TICKET_CLIENT:
      return {
        ...state,
        fetching: false,
        error: payload.error,
      };

    case FETCH_TICKETS_CLIENT:
      return {
        ...state,
        fetching: true,
      };
    case SUCCESS_FETCH_TICKETS_CLIENT:
      return {
        ...state,
        data: payload,
        fetching: false,
      };
    case FAILED_FECTH_TICKET_CLIENT:
      return {
        ...state,
        fetching: false,
        error: payload.error,
      };

    case RESET_STORE:
      return ticketClientState;
    default:
      return state;
  }
};
