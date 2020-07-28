import {
  LOGIN_SUCCESS,
  LOGIN_SENDING_DATA,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SET_DATA,
} from '../actions/auth';
import {PLAN_SELECTED} from '../actions/plan';

const authState = {
  user: {},
  token: '',
  sending: false,
  error: '',
  loggedIn: false,
  message: '',
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
        error: payload,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        sending: false,
        message: payload.data.message,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        sending: false,
        error: payload.error,
      };
    case SIGNUP_SET_DATA:
      return {
        ...state,
        sending: false,
        user: {
          ...state.user,
          ...payload,
        },
      };
    case PLAN_SELECTED:
      return {
        ...state,
        user: {
          ...state.user,
          location: payload.position,
        },
      };
    default:
      return state;
  }
};
