import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {rootReducer} from './index';
import {rootEpic} from '../epics';
import Reactotron from 'reactotron-react-native';
const {pathname} = window.location || {};
const IS_RUNNING_IN_CHROME = pathname && pathname.indexOf('debugger-ui');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const configStore = () => {
  const logger = createLogger({});
  process.env.api = 'https://nextline.jaspesoft.com/api/v1';
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];
  if (IS_RUNNING_IN_CHROME && !IS_PRODUCTION) {
    middlewares.push(logger);
  }
  const enhancer = IS_PRODUCTION
    ? compose(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares), Reactotron.createEnhancer());

  const store = createStore(rootReducer, enhancer);
  epicMiddleware.run(rootEpic);
  return store;
};
