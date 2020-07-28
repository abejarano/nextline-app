import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignupPartialData} from '../../actions/auth';

export function RegisterScreen({navigation}) {
  const dispatch = useDispatch();

  return (
    <View style={styles.view}>
      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>Register Client!</Text>
      <TextInput>Nombre o razon social</TextInput>
      <TextInput>clave</TextInput>
      <TextInput>Email</TextInput>
      <TextInput>clave</TextInput>
      <TextInput>confirmar clave</TextInput>
      <Button
        title="Register"
        onPress={() => {
          dispatch(
            setSignupPartialData({
              nombre_razsoc: '',
              cedula_rif: '',
              correo: '',
              celular: '',
              clave: '',
            }),
          );
          navigation.push('PlanSelect');
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
