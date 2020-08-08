import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from '../styles';

const {StyleSheet, View} = require('react-native');

export const TabBar = ({state, navigation, descriptors}) => {
  return (
    <View style={styles.nav}>
      <View style={styles.navView}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          return (
            <TabItem
              key={`route-nav-item-${label}`}
              options={options}
              route={route}
              label={label}
              navigation={navigation}
              isFocused={isFocused}
            />
          );
        })}
      </View>
    </View>
  );
};

const TabItem = ({route, navigation, options, isFocused}) => {
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabitem}>
      {options.tabBarIcon && (
        <options.tabBarIcon
          color={
            isFocused ? globalStyles.LIGTH_BLUE_COLOR : globalStyles.WHITE_COLOR
          }
        />
      )}
      {/* <Text style={isFocused ? styles.tabitemText : styles.tabitemText}>
        {route}
      </Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nav: {
    // position: null,
    backgroundColor: globalStyles.PRIMARY_COLOR_DARK,
    left: '10%',
    right: 0,
    bottom: 12,
    elevation: 8,
    height: 60,
    paddingTop: 0,
    paddingHorizontal: 0,
    borderRadius: 24,
    width: '80%',
  },
  navView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  tabitem: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    height: '100%',
  },
  tabitemText: {
    color: globalStyles.WHITE_COLOR,
  },
});
