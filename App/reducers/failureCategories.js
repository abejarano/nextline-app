import {
  FAILURE_CATEGORIES_FETCH_SUCCESS,
  FAILURE_CATEGORIES_FETCH_FAILED,
  FAILURE_CATEGORIES_FETCHING_DATA,
  FAILURE_CATEGORY_SELECTED,
} from '../actions/failureCategories';
import {RESET_STORE} from '../actions/utils';

const failureCategoriesState = {
  data: [],
  fetching: false,
  error: '',
  selected: {
    id: null,
    descripcion: '',
  },
};

export const failureCategoriesReducer = (
  state = failureCategoriesState,
  {type, payload},
) => {
  switch (type) {
    case FAILURE_CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        data: payload.data.results,
        fetching: false,
      };
    case FAILURE_CATEGORIES_FETCHING_DATA:
      return {
        ...state,
        fetching: true,
      };
    case FAILURE_CATEGORIES_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload.error,
      };

    case FAILURE_CATEGORY_SELECTED:
      return {
        ...state,
        selected: payload,
      };
    case RESET_STORE:
      return failureCategoriesState;
    default:
      return state;
  }
};
