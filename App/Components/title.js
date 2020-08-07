import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import globalStyles from '../styles';
import {scale} from '../utils';

export const Title = ({text}) => {
  return (
    <View style={styles.title}>
      <Text numberOfLines={2} style={styles.titleText}>
        {text}
      </Text>
      <Text numberOfLines={1} style={styles.texDivision}>
        _________________________
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    display: 'flex',
    width: '100%',
    marginLeft: '5%',
    marginBottom: '5%',
    // height: '10%',
  },
  titleText: {
    fontSize: scale(44),
    marginLeft: '2%',
    textAlign: 'left',
    color: globalStyles.WHITE_COLOR,
    fontFamily: globalStyles.TREBUCHET_BOLD_FONT,
  },
  texDivision: {
    color: globalStyles.WHITE_COLOR,
  },
});
