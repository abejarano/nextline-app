import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ArrowSvg from '../assets/svg/Arrow';
import globalStyles from '../styles';

export const SpeedGroup = ({upSpeed, downSpeed}) => {
  return (
    <View style={styles.speedGroup}>
      <View style={styles.speedItem}>
        <ArrowSvg style={styles.arrow} color={globalStyles.GREEN_COLOR} />
        <Text style={styles.speed}>{upSpeed} Mb</Text>
      </View>
      <View style={styles.speedItem}>
        <ArrowSvg
          style={styles.arrow}
          direction="bottom"
          color={globalStyles.GREEN_COLOR}
        />
        <Text style={styles.speed}>{downSpeed} Mb</Text>
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
