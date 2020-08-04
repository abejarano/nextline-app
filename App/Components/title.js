import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import globalStyles from '../styles';

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
    marginLeft: '15%',
    marginBottom: '10%',
  },
  titleText: {
    fontSize: 45,
    marginLeft: '2%',
    fontWeight: 'bold',
    color: globalStyles.WHITE_COLOR,
  },
  texDivision: {
    color: globalStyles.WHITE_COLOR,
  },
});
