import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import LoginNavigator from './LoginNavigator';
import TabsNavigator from './TabsNavigator';
import {checkToken} from '../actions/auth';

export const MainNavigator = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);
  return isLoggedIn ? <TabsNavigator /> : <LoginNavigator />;
};
