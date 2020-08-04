import {actionGenerator} from './utils';

export const PLAN_FETCH_SUCCESS = '@plan/SUCCESS';
export const PLAN_FETCH_FAILED = '@plan/FAILED';
export const PLAN_FETCHING_DATA = '@plan/FETCHING_DATA';
export const PLAN_SELECTED = '@plan/SELECTED';

export const planFetch = actionGenerator(PLAN_FETCHING_DATA);

export const planSelect = actionGenerator(PLAN_SELECTED);

export const planFetchSucces = actionGenerator(PLAN_FETCH_SUCCESS);

export const planFetchFailed = actionGenerator(PLAN_FETCH_FAILED);
