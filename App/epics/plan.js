import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import {combineEpics} from 'redux-observable';
import {
  PLAN_FETCHING_DATA,
  planFetchSucces,
  planFetchFailed,
} from '../actions/plan';

const fetchPlansEpic = (action$) =>
  action$.pipe(
    ofType(PLAN_FETCHING_DATA),
    mergeMap((action) =>
      ajax.getJSON(`${process.env.api}/config/planes/`).pipe(
        map((response) => planFetchSucces(response)),
        catchError((error) => of(planFetchFailed(error))),
      ),
    ),
  );

export const planEpics = combineEpics(fetchPlansEpic);
