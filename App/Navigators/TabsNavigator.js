import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {configStore} from '../reducers/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeClientScreen from '../Containers/HomeClient';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Profile() {
  return (
    <View style={styles.centered}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function PlansScreen({navigation}) {
  return (
    <View style={styles.centered}>
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
    <View style={{}}>
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

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabsNavigator;
