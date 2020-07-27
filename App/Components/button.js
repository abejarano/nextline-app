import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
    backgroundColor: '#57585a',
    width: '60%',
    padding: 15,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: '#f5f5f5',
  },
});
