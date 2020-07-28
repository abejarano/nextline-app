import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import globalStyles from '../styles';

export const ButtonStyled = ({onPress, color, text, backgroundColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.button, backgroundColor}}
      accessibilityLabel="Learn more about this purple button">
      <Text style={{...styles.text, color}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: globalStyles.GRAY_COLOR,
    width: '60%',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    color: globalStyles.WHITE_COLOR,
  },
});
