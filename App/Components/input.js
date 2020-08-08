import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import globalStyles from '../styles';
import {scale} from '../utils';

export const InputStyled = ({
  value,
  secureTextEntry,
  placeholder,
  onChange,
  style,
  Icon,
  iconColor,
  valid,
  isMultiline,
  numberOfLines,
}) => {
  return (
    <View
      style={
        valid
          ? {...styles.input, ...style}
          : {...styles.input, ...style, ...styles.inValidInput}
      }>
      {Icon && <Icon style={styles.icon} color={iconColor} />}
      <TextInput
        multiline={isMultiline}
        numberOfLines={numberOfLines}
        clearTextOnFocus={true}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => {
          onChange(text);
        }}
        style={valid ? styles.innerInput : styles.inValidText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: globalStyles.WHITE_COLOR,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 40,
    minHeight: 40,
    paddingLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  icon: {
    flex: 1,
  },
  inValidInput: {
    borderBottomWidth: 2,
    borderBottomColor: globalStyles.RED_COLOR,
  },
  inValidText: {
    width: '90%',
    fontSize: scale(17),
    fontFamily: globalStyles.SEGOE_FONT,
    color: globalStyles.RED_COLOR,
  },
  innerInput: {
    width: '90%',
    fontSize: scale(17),
    fontFamily: globalStyles.SEGOE_FONT,
    color: globalStyles.GRAY_TEXT_COLOR,
  },
});
