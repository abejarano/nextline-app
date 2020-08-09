import {
  LOGIN_SUCCESS,
  LOGIN_SENDING_DATA,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SET_DATA,
  SIGNOUT_SUCCESS,
  STORAGE_TOKEN_READED_SUCCESS,
  SIGNUP_SENDING_DATA,
  RESET_AUTH_ERROR,
} from '../actions/auth';
import {PLAN_SELECTED} from '../actions/plan';
import {
  SERVICIO_STATUS_FETCH_SUCCESS,
  CONTRATO_STATUS_FETCH_SUCCESS,
} from '../actions/servicio';
import {LOAD_PROFILE_SUCCESS} from '../actions/profile';
import {RESET_STORE} from '../actions/utils';

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
  isClient: false,
  contrato: null,
};

export const authReducer = (state = authState, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        loggedIn: true,
        sending: false,
        isClient: payload.es_cliente,
      };
    case SIGNUP_SENDING_DATA:
      return {
        ...state,
        sending: true,
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
        },
      };
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...payload,
        },
      };
    case STORAGE_TOKEN_READED_SUCCESS:
      return {
        ...state,
        token: payload[0][1],
        loggedIn: payload[0][1] ? true : false,
        isClient: payload[1][1] === 'true',
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
    case RESET_AUTH_ERROR:
      return {
        ...state,
        error: '',
      };
    case CONTRATO_STATUS_FETCH_SUCCESS:
      return {
        ...state,
        contrato: payload,
      };
    case RESET_STORE:
      return authState;
    default:
      return {...state};
  }
};
