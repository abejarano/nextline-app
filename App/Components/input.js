import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const InputStyled = ({
  value,
  secureTextEntry,
  placeholder,
  onChange,
  style,
}) => {
  return (
    <TextInput
      style={{...styles.input, ...style}}
      clearTextOnFocus={true}
      placeholder={placeholder}
      onChangeText={(text) => {
        onChange(text);
      }}
      secureTextEntry={secureTextEntry}>
      {value}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f5f5f5',
    width: '80%',
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    color: '#f5f5f5',
  },
});
