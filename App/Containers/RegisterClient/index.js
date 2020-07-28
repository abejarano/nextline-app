import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignupPartialData} from '../../actions/auth';
import globalStyles from '../../styles';
import {InputStyled} from '../../Components/input';
import {ButtonStyled} from '../../Components/button';

export function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('12341234');
  const [cedularif, setCedulaRif] = useState('');
  const [nombrerzb, setNombreRzb] = useState('');
  const [phone, setPhone] = useState('');
  const [repassword, setRepassword] = useState('12341234');

  return (
    <View style={styles.view}>
      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>Register Client!</Text>
      <InputStyled
        placeholder="Nombre o razon social"
        onChange={(text) => {
          setNombreRzb(text);
        }}
        style={styles.button}
      />
      <InputStyled
        placeholder="Cedula o RIF"
        onChange={(text) => {
          setCedulaRif(text);
        }}
        style={styles.button}
      />
      <InputStyled
        placeholder="Email"
        onChange={(text) => {
          setEmail(text);
        }}
        style={styles.button}
      />
      <InputStyled
        placeholder="Telefono"
        onChange={(text) => {
          setPhone(text);
        }}
        style={styles.button}
      />
      <InputStyled
        placeholder="Clave"
        secureTextEntry={true}
        onChange={(text) => {
          setPassword(text);
        }}
        style={styles.button}
      />
      <InputStyled
        placeholder="Confirmar clave"
        secureTextEntry={true}
        onChange={(text) => {
          setRepassword(text);
        }}
        style={styles.button}
      />
      <ButtonStyled
        onPress={() => {
          if (repassword === password) {
            dispatch(
              setSignupPartialData({
                nombre_razsoc: nombrerzb,
                cedula_rif: cedularif,
                correo: email,
                celular: phone,
                clave: password,
              }),
            );
            navigation.push('PlanSelect');
          }
        }}
        backgroundColor={globalStyles.GRAY_COLOR}
        color={globalStyles.WHITE_COLOR}
        text={'Registrar'}
        style={styles.button}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    marginTop: -30,
    backgroundColor: globalStyles.PRIMARY_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
