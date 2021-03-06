import {combineReducers} from 'redux';
import {authReducer as auth} from './auth';
import {planReducer as plans} from './plan';
import {facturaReducer as facturas} from './factura';
import {servicioReducer as servicio} from './servicio';
import {profileReducer as profile} from './profile';

export const rootReducer = combineReducers({
  auth,
  plans,
  servicio,
  profile,
  facturas,
});
