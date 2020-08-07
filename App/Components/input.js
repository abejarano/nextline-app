import React from 'react';
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
  isMultiline,
  numberOfLines,
}) => {
  return (
    <View style={{...styles.input, ...style}}>
      {Icon && <Icon style={styles.icon} color={iconColor} />}
      <TextInput
        multiline={isMultiline}
        numberOfLines={numberOfLines}
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
  innerInput: {
    width: '90%',
    fontSize: scale(17),
    fontFamily: globalStyles.SEGOE_FONT,
  },
});
