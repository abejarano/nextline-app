import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import LoginNavigator from './LoginNavigator';
import TabsNavigator from './TabsNavigator';
import {checkToken} from '../actions/auth';
import {connectFmc} from '../actions/fcm';

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);
  useEffect(() => {
    if (token != null) {
      dispatch(connectFmc());
    }
  }, [token]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
