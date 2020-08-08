import {ofType} from 'redux-observable';
import {of, from} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
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
import axios from 'axios';

const fetchFailuresCategories = (action$, state$) =>
  action$.pipe(
    ofType(FAILURE_CATEGORIES_FETCHING_DATA),
    mergeMap((action) =>
      from(
        axios.get(`${process.env.api}/support/tickets/categoria-fallas`, {
          headers: {
            Authorization: `Token ${state$.value.auth.token}`,
          },
        }),
      ).pipe(
        map(failureCategoriesFetchSucces),
        catchError((error) => of(failureCategoriesFetchFailed(error))),
      ),
    ),
  );

export const failureCategoriesEpic = combineEpics(fetchFailuresCategories);
