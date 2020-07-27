import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginClient from '../Containers/LoginClient';
import {RegisterScreen} from '../Containers/RegisterClient';

const Stack = createStackNavigator();

function SelectRole() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Role Screen</Text>
    </View>
  );
}

const LoginNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginClient} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SelecRole" component={SelectRole} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
