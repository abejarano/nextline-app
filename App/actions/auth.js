import {actionGenerator} from './utils';

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
export const STORAGE_TOKEN_READED_SUCCESS = '@auth/storage/token-readed';
export const SIGNOUT = '@auth/signout';
export const SIGNOUT_SUCCESS = '@auth/signout/success';
export const SIGNOUT_FAILED = '@auth/signout/failed';

export const RESET_AUTH_ERROR = '@auth/auth/reset-error';

export const login = actionGenerator(LOGIN_SENDING_DATA);

export const loginSuccess = actionGenerator(LOGIN_SUCCESS);

export const checkToken = actionGenerator(STORAGE_CHECK_TOKEN);

export const loginFailed = actionGenerator(LOGIN_FAILED);

export const signup = actionGenerator(SIGNUP_SENDING_DATA);

export const tokenSaved = actionGenerator(LOGIN_STORAGE_TOKEN_SUCCESS);

export const tokenReaded = actionGenerator(STORAGE_TOKEN_READED_SUCCESS);

export const tokenSaveFailed = actionGenerator(LOGIN_STORAGE_TOKEN_FAILED);

export const setSignupPartialData = actionGenerator(SIGNUP_SET_DATA);

export const signupSuccess = actionGenerator(SIGNUP_SUCCESS);

export const signupFailed = actionGenerator(SIGNUP_FAILED);

export const signout = actionGenerator(SIGNOUT);

export const signoutSuccess = actionGenerator(SIGNOUT_SUCCESS);

export const signoutFailed = actionGenerator(SIGNOUT_FAILED);

export const resetErrorAuth = actionGenerator(RESET_AUTH_ERROR);
