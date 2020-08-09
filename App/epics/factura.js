import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import {combineEpics} from 'redux-observable';
import {
  FACTURA_FETCHING_DATA,
  facturaFetchSucces,
  facturaFetchFailed,
} from '../actions/factura';

const fetchFacturasEpic = (action$) =>
  action$.pipe(
    ofType(FACTURA_FETCHING_DATA),
    mergeMap((action) =>
      ajax.getJSON(`${process.env.api}/admon/factura`).pipe(
        map(facturaFetchSucces),
        catchError((error) => of(facturaFetchFailed(error))),
      ),
    ),
  );

export const facturaEpics = combineEpics(fetchFacturasEpic);
