import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginNavigator from './LoginNavigator';
import TabsNavigator from './TabsNavigator';
import {checkToken} from '../actions/auth';
import FcmService from '../Services/fcm';
import {connectFmc} from '../actions/fcm';

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    console.log('_init_');
    // FcmService();
    dispatch(connectFmc());
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token == null ? (
          <MainStack.Screen name="Auth" component={LoginNavigator} />
        ) : (
          <MainStack.Screen name="App" component={TabsNavigator} />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
