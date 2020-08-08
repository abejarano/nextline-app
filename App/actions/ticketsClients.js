import {actionGenerator} from './utils';

export const CREATE_TICKET_CLIENT = '@client/ticket/CREATE';
export const SUCCESS_CREATE_TICKET_CLIENT = '@client/ticket/CREATE_SUCCESS';
export const FAILED_CREATE_TICKET_CLIENT = '@client/ticket/CREATE_FAILED';
export const FETCH_TICKETS_CLIENT = '@client/ticket/FETCH';
export const SUCCESS_FETCH_TICKETS_CLIENT = '@client/ticket/FETCH_SUCCESS';
export const FAILED_FECTH_TICKET_CLIENT = '@client/ticket/FETCH_FAILED';

export const clientTicketCreate = actionGenerator(CREATE_TICKET_CLIENT);
export const clientTicketCreateSuccess = actionGenerator(
  SUCCESS_CREATE_TICKET_CLIENT,
);
export const clientTicketCreateFailed = actionGenerator(
  FAILED_CREATE_TICKET_CLIENT,
);

export const clientTicketFetch = actionGenerator(FETCH_TICKETS_CLIENT);
export const clientTicketFetchSuccess = actionGenerator(
  SUCCESS_FETCH_TICKETS_CLIENT,
);
export const clientTicketFetchFailed = actionGenerator(
  FAILED_FECTH_TICKET_CLIENT,
);
