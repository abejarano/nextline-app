import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginClient from '../Containers/LoginClient';
import {RegisterScreen} from '../Containers/RegisterClient';
import {PlanSelectScreen} from '../Containers/RegisterClient/planSelector';

const Stack = createStackNavigator();

function SelectRole() {
  return (
    <View style={styles.centered}>
      <Text>Role Screen</Text>
    </View>
  );
}

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginClient} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="PlanSelect" component={PlanSelectScreen} />
      <Stack.Screen name="SelecRole" component={SelectRole} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginNavigator;
