export const PLAN_FETCH_SUCCESS = '@plan/SUCCESS';
export const PLAN_FETCH_FAILED = '@plan/FAILED';
export const PLAN_FETCHING_DATA = '@plan/FETCHING_DATA';
export const PLAN_SELECTED = '@plan/SELECTED';

export const planFetch = () => ({
  type: PLAN_FETCHING_DATA,
});

export const planSelect = (payload) => ({
  type: PLAN_SELECTED,
  payload,
});

export const planFetchSucces = (payload) => ({
  type: PLAN_FETCH_SUCCESS,
  payload,
});

export const planFetchFailed = (payload) => ({
  type: PLAN_FETCH_FAILED,
  payload,
});
