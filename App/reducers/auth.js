import {
  LOGIN_SUCCESS,
  LOGIN_SENDING_DATA,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from '../actions/auth';

const authState = {
  user: {},
  token: '',
  sending: false,
  error: '',
};

export const authReducer = (state = authState, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        sending: false,
      };
    case LOGIN_SENDING_DATA:
      return {
        ...state,
        sending: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        sending: false,
        error: payload.error,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        sending: false,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        sending: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
