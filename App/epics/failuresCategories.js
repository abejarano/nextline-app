import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import {combineEpics} from 'redux-observable';
import {
	failureCategoriesFetch,
	failureCategoriesSelect,
	failureCategoriesFetchSucces,
	failureCategoriesFetchFailed,
	FAILURE_CATEGORIES_FETCHING_DATA,
	FAILURE_CATEGORY_SELECTED,
	FAILURE_CATEGORIES_FETCH_SUCCESS,
	FAILURE_CATEGORIES_FETCH_FAILED,
} from '../actions/failureCategories';

const fetchFailuresCategories = (action$) =>
  action$.pipe(
    ofType(FAILURE_CATEGORIES_FETCHING_DATA),
    mergeMap((action) =>
      ajax.getJSON(`${process.env.api}/support/tickets/categoria-fallas/`).pipe(
        map(failureCategoriesFetchSucces),
        catchError((error) => of(failureCategoriesFetchFailed(error))),
      ),
    ),
  );

export const planEpics = combineEpics(fetchFailuresCategories);
