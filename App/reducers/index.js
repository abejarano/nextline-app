import {combineReducers} from 'redux';
import {authReducer as auth} from './auth';
import {planReducer as plans} from './plan';

export const rootReducer = combineReducers({
  auth,
  plans,
});
