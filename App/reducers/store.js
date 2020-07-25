import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {rootReducer} from './index';
import {rootEpic} from '../epics';
const {pathname} = window.location || {};
const IS_RUNNING_IN_CHROME = pathname && pathname.indexOf('debugger-ui');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const configStore = () => {
  const logger = createLogger({});
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];
  console.log(IS_RUNNING_IN_CHROME, IS_PRODUCTION);
  if (IS_RUNNING_IN_CHROME && !IS_PRODUCTION) {
    middlewares.push(logger);
  }
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  epicMiddleware.run(rootEpic);
  return store;
};
