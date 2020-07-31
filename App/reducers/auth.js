import {
  LOGIN_SUCCESS,
  LOGIN_SENDING_DATA,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SET_DATA,
  LOGIN_STORAGE_TOKEN_SUCCESS,
  SIGNOUT_SUCCESS,
} from '../actions/auth';
import {PLAN_SELECTED} from '../actions/plan';
import {SERVICIO_STATUS_FETCH_SUCCESS} from '../actions/servicio';

const authState = {
  user: {
    avatar: '',
    cedula_rif: '',
    celular: '',
    correo: '',
    direccion: '',
    latitud: '',
    longitud: '',
    nombre_razsoc: '',
  },
  token: null,
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
        loggedIn: true,
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
    case LOGIN_STORAGE_TOKEN_SUCCESS:
      return {
        ...state,
        token: payload,
        loggedIn: payload ? true : false,
      };
    case SIGNOUT_SUCCESS:
      console.log(state, 'test');
      return {
        ...state,
        loggedIn: false,
        token: null,
      };
    case SERVICIO_STATUS_FETCH_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...payload.solicitud_servicio,
        },
      };
    default:
      return state;
  }
};
