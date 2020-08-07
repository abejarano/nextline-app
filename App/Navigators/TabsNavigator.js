import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import globalStyles from '../styles';

import HomeClientScreen from '../Containers/HomeClient';
import {ProfileScreen} from '../Containers/Profile';
import HomeSvg from '../assets/svg/Home';
import ChatScreen from '../Containers/ChatClient';
import ProfileSvg from '../assets/svg/Profile';
import {TabBar} from '../Components/tabBar';
import {TicketsScreen} from '../Containers/TicketsClient';
import {CreateTicketsScreen} from '../Containers/TicketsClient/CreateTicket';
import {Text, StyleSheet, Dimensions} from 'react-native';
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeClientScreen} />
      <HomeStack.Screen name="Chat" component={ChatScreen} />
      <HomeStack.Screen name="TicketsClient" component={TicketsScreen} />
      <HomeStack.Screen
        name="TicketsCreateClient"
        component={CreateTicketsScreen}
      />
      {/* <HomeStack.Screen name="PlansDetails" component={PlansDetailsScreen} /> */}
    </HomeStack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabBar}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color}) => <HomeSvg color={color} />,
        }}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color}) => <ProfileSvg color={color} />,
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const StackContainer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <Text style={styles.text}>Prueba</Text>}
      // drawerContent={(props) => <SideMenu {...props} />}
      drawerStyle={styles.drawer}
      drawerPosition="right">
      <Drawer.Screen name="Screens" component={TabsNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    alignItems: 'flex-end',
    marginLeft: Dimensions.get('window').width,
  },
  text: {
    ...globalStyles.DEBUG,
    textAlign: 'right',
  },
});

export default StackContainer;
