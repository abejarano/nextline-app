export const LOGIN_SUCCESS = '@auth/login/SUCCESS';
export const LOGIN_FAILED = '@auth/login/FAILED';
export const LOGIN_SENDING_DATA = '@auth/login/SENDING_DATA';

export const SIGNUP_SUCCESS = '@auth/signup/SUCCESS';
export const SIGNUP_FAILED = '@auth/signup/FAILED';
export const SIGNUP_SENDING_DATA = '@auth/login/SENDING_DATA';

export const login = (payload) => ({
  type: LOGIN_SENDING_DATA,
  payload,
});

export const loginSucces = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});
export const signup = (payload) => ({
  type: SIGNUP_SENDING_DATA,
  payload,
});

export const signupSucces = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupFailed = (payload) => ({
  type: SIGNUP_FAILED,
  payload,
});
