import React from 'react';
import {View, Text, Button} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {configStore} from '../reducers/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeClientScreen from '../Containers/HomeClient';
import LoginNavigator from './LoginNavigator';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Profile() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function PlansScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>PlansScreen Screen</Text>
      <View>
        <Button
          title="View Details"
          onPress={() => navigation.navigate('PlansDetails')}
        />
      </View>
    </View>
  );
}

function PlansDetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeClientScreen} />
      <HomeStack.Screen name="Plans" component={PlansScreen} />
      <HomeStack.Screen name="PlansDetails" component={PlansDetailsScreen} />
    </HomeStack.Navigator>
  );
}

const TabsNavigator = () => {
  return (
    <Provider store={configStore()}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export const MainNavigator = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  return isLoggedIn ? <TabsNavigator /> : <LoginNavigator />;
};

export default TabsNavigator;
