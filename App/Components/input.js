import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const InputStyled = ({value, secureTextEntry}) => {
	
  return (
		<TextInput 
      style={{...styles.input}}
			clearTextOnFocus={true} 
			secureTextEntry={secureTextEntry}
		>
        {value}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f5f5f5',
    width: '80%',
    padding: 15,
		borderRadius: 10,
		marginTop: 5,
		marginBottom: 5
  },
  text: {
    textAlign: 'center',
    color: '#f5f5f5',
  },
});
