import {actionGenerator} from './utils';

export const FAILURE_CATEGORIES_FETCH_SUCCESS = '@failureCategories/SUCCESS';
export const FAILURE_CATEGORIES_FETCH_FAILED = '@failureCategories/FAILED';
export const FAILURE_CATEGORIES_FETCHING_DATA =
  '@failureCategories/FETCHING_DATA';
export const FAILURE_CATEGORY_SELECTED = '@failureCategories/SELECTED';

export const failureCategoriesFetch = actionGenerator(
  FAILURE_CATEGORIES_FETCHING_DATA,
);

export const failureCategoriesSelect = actionGenerator(
  FAILURE_CATEGORY_SELECTED,
);

export const failureCategoriesFetchSucces = actionGenerator(
  FAILURE_CATEGORIES_FETCH_SUCCESS,
);

export const failureCategoriesFetchFailed = actionGenerator(
  FAILURE_CATEGORIES_FETCH_FAILED,
);
