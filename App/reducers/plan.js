import {
  PLAN_SELECTED,
  PLAN_FETCH_SUCCESS,
  PLAN_FETCHING_DATA,
  PLAN_FETCH_FAILED,
} from '../actions/plan';

const planState = {
  data: [],
  fetching: false,
  error: '',
  selected: null,
};

export const planReducer = (state = planState, {type, payload}) => {
  switch (type) {
    case PLAN_FETCH_SUCCESS:
      return {
        ...state,
        data: payload.results,
        fetching: false,
      };
    case PLAN_FETCHING_DATA:
      return {
        ...state,
        fetching: true,
      };
    case PLAN_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload.error,
      };

    case PLAN_SELECTED:
      return {
        ...state,
        selected: payload,
      };
    default:
      return state;
  }
};
