import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import globalStyles from '../styles';

export const StyledStatusBar = () => {
  return (
    <StatusBar
      backgroundColor={globalStyles.STATUS_BAR_COLOR}
      //   barStyle={styles.styleStatusBar}
    />
  );
};
const styles = StyleSheet.create({
  styleStatusBar: {},
});
