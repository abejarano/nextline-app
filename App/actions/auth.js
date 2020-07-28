export const LOGIN_SUCCESS = '@auth/login/SUCCESS';
export const LOGIN_FAILED = '@auth/login/FAILED';
export const LOGIN_SENDING_DATA = '@auth/login/SENDING_DATA';

export const SIGNUP_SUCCESS = '@auth/signup/SUCCESS';
export const SIGNUP_FAILED = '@auth/signup/FAILED';
export const SIGNUP_SENDING_DATA = '@auth/signup/SENDING_DATA';
export const SIGNUP_SET_DATA = '@auth/login/SET_DATA';

export const LOGIN_STORAGE_TOKEN_SUCCESS = '@auth/storage/token-success';
export const LOGIN_STORAGE_TOKEN_FAILED = '@auth/storage/token-failed';
export const STORAGE_CHECK_TOKEN = '@auth/storage/check-for-token';

export const SIGNOUT = '@auth/signout';
export const SIGNOUT_SUCCESS = '@auth/signout/success';
export const SIGNOUT_FAILED = '@auth/signout/failed';

export const login = (payload) => ({
  type: LOGIN_SENDING_DATA,
  payload,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const checkToken = () => ({
  type: STORAGE_CHECK_TOKEN,
});

export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});

export const signup = (payload) => ({
  type: SIGNUP_SENDING_DATA,
  payload,
});

export const tokenSaved = (payload) => ({
  type: LOGIN_STORAGE_TOKEN_SUCCESS,
  payload: payload,
});

export const tokenSaveFailed = (payload) => ({
  type: LOGIN_STORAGE_TOKEN_FAILED,
  payload,
});

export const setSignupPartialData = (payload) => ({
  type: SIGNUP_SET_DATA,
  payload,
});

export const signupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupFailed = (payload) => ({
  type: SIGNUP_FAILED,
  payload,
});

export const signout = () => ({
  type: SIGNOUT,
});

export const signoutSuccess = (payload) => ({
  type: SIGNOUT_SUCCESS,
  payload,
});

export const signoutFailed = (payload) => ({
  type: SIGNOUT_FAILED,
  payload,
});
