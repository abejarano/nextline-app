import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';

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
      }}
      options={{
        transitionSpec: {
          open: TransitionSpecs.SlideFromRightIOS,
          close: TransitionSpecs.SlideFromRightIOS,
        },
      }}>
      <Stack.Screen
        name="Login"
        component={LoginClient}
        options={{
          title: 'Login',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="PlanSelect"
        component={PlanSelectScreen}
        options={{
          title: 'PlanSelect',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="SelecRole"
        component={SelectRole}
        options={{
          title: 'SelecRole',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
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
