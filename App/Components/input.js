import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const InputStyled = ({
  value,
  secureTextEntry,
  placeholder,
  onChange,
  style,
  Icon,
  iconColor,
  isMultiline
}) => {
  return (
    <View style={{...styles.input, ...style}}>
      {Icon && <Icon style={styles.icon} color={iconColor} />}
      <TextInput
        multiline={isMultiline}
        clearTextOnFocus={true}
        placeholder={placeholder}
        onChangeText={(text) => {
          onChange(text);
        }}
        style={styles.innerInput}
        secureTextEntry={secureTextEntry}>
        {value}
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f5f5f5',
    height: 40,
    width: '80%',
    paddingLeft: 15,
    borderRadius: 100,
    marginTop: 5,
    marginBottom: 5,
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginLeft: 15,
    color: '#f5f5f5',
  },
  icon: {},
  innerInput: {
    width: '100%',
  },
});
