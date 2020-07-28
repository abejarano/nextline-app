import React from 'react';
import {useSelector} from 'react-redux';

import LoginNavigator from './LoginNavigator';
import TabsNavigator from './TabsNavigator';

export const MainNavigator = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  return isLoggedIn ? <TabsNavigator /> : <LoginNavigator />;
};
