import {
	LOAD_PROFILE,
	LOAD_PROFILE_SUCCESS,
	LOAD_PROFILE_FAILED,
} from '../actions/profile';

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
        data: payload.results,
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

    default:
      return state;
  }
};