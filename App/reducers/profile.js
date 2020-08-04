import {
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAILED,
} from '../actions/profile';
import {RESET_STORE} from '../actions/utils';

const profileState = {
  data: null,
  fetching: false,
  error: '',
};

export const profileReducer = (state = profileState, {type, payload}) => {
  switch (type) {
    case LOAD_PROFILE:
      return {
        ...state,
        fetching: true,
      };
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case LOAD_PROFILE_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload.error,
      };
    case RESET_STORE:
      return profileState;
    default:
      return state;
  }
};
