import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import globalStyles from '../styles';

export const InputStyled = ({
  value,
  secureTextEntry,
  placeholder,
  onChange,
  style,
  Icon,
  iconColor,
  isMultiline,
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
    // fontFamily: globalStyles.TREBUCHET_FONT,
    // fontWeight: 'bold',
  },
});
