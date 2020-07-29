import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeClientScreen from '../Containers/HomeClient';
import {ProfileScreen} from '../Containers/Profile';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PlansScreen = ({navigation}) => {
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
};

const PlansDetailsScreen = () => {
  return (
    <View style={{}}>
      <Text>Details!</Text>
    </View>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeClientScreen} />
      <HomeStack.Screen name="Plans" component={PlansScreen} />
      <HomeStack.Screen name="PlansDetails" component={PlansDetailsScreen} />
    </HomeStack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
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
