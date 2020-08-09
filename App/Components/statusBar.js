import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import globalStyles from '../styles';

export const StyledStatusBar = ({color}) => {
  return (
    <StatusBar
      translucent={true}
      backgroundColor={color || globalStyles.STATUS_BAR_COLOR}
      //   barStyle={styles.styleStatusBar}
      barStyle="dark-content"
    />
  );
};
const styles = StyleSheet.create({
  styleStatusBar: {},
});
