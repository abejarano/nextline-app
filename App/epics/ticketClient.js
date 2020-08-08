import {ofType} from 'redux-observable';
import {from, of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {
  CREATE_TICKET_CLIENT,
  SUCCESS_CREATE_TICKET_CLIENT,
  FETCH_TICKETS_CLIENT,
  SUCCESS_FETCH_TICKETS_CLIENT,
  FAILED_CREATE_TICKET_CLIENT,
  FAILED_FECTH_TICKET_CLIENT,
  clientTicketCreate,
  clientTicketFetch,
  clientTicketCreateSuccess,
  clientTicketFetchSuccess,
  clientTicketCreateFailed,
  clientTicketFetchFailed,
} from '../actions/ticketsClients';
import {combineEpics} from 'redux-observable';
import axios from 'axios';

const loadTicketsClientEpic = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_TICKETS_CLIENT),
    mergeMap((action) =>
      from(
        axios.get(`${process.env.api}/support/tickets`, {
          headers: {
            Authorization: `Token ${state$.value.auth.token}`,
          },
        }),
      ).pipe(
        map((response) => clientTicketFetchSuccess(response)),
        catchError((error) => of(clientTicketFetchFailed(error))),
      ),
    ),
  );

const createTicketClientEpic = (action$, state$) =>
  action$.pipe(
    ofType(CREATE_TICKET_CLIENT),
    mergeMap((action) =>
      from(
        axios.post(`${process.env.api}/support/tickets/`, action.payload, {
          headers: {
            Authorization: `Token ${state$.value.auth.token}`,
          },
        }),
      ).pipe(
        map((response) => clientTicketCreateSuccess(response.data)),
        catchError((error) => of(clientTicketCreateFailed(error))),
      ),
    ),
  );

export const ticketClientEpics = combineEpics(
  loadTicketsClientEpic,
  createTicketClientEpic,
);
