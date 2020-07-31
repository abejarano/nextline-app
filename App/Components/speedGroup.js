import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ArrowSvg from '../assets/svg/Arrow';
import globalStyles from '../styles';

export const SpeedGroup = ({}) => {
  return (
    <View style={styles.speedGroup}>
      <View style={styles.speedItem}>
        <ArrowSvg style={styles.arrow} color={globalStyles.GREEN_COLOR} />
        <Text style={styles.speed}>2 Mb</Text>
      </View>
      <View style={styles.speedItem}>
        <ArrowSvg
          style={styles.arrow}
          direction="bottom"
          color={globalStyles.GREEN_COLOR}
        />
        <Text style={styles.speed}>1 Mb</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  speedGroup: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
  },
  speedItem: {},
  speed: {
    color: globalStyles.GRAY_TEXT_COLOR,
  },
  arrow: {
    width: 45,
    height: 45,
  },
});
