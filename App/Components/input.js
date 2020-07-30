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
}) => {
  return (
    <View style={{...styles.input, ...style}}>
      {Icon ? (
        <Icon style={styles.icon} color={iconColor} />
      ) : (
        <Text style={styles.hidedText} />
      )}
      <TextInput
        clearTextOnFocus={true}
        placeholder={placeholder}
        onChangeText={(text) => {
          onChange(text);
        }}
        secureTextEntry={secureTextEntry}>
        {value}
      </TextInput>
    </View>
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#f5f5f5',
  },
  hidedText: {
    display: 'none',
  },
  icon: {},
});
