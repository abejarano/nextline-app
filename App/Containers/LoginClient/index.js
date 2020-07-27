import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {login} from '../../actions/auth';
import {useDispatch} from 'react-redux';
import {ButtonStyled} from '../../Components/button';
import theme from '../../styles';
const LoginClient = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.view}>
      <Text>Bienvenido!</Text>
      <Text>Inicia sesion para disfrutar de nuestros servicios</Text>
      <TextInput>Email</TextInput>
      <TextInput>clave</TextInput>
      <ButtonStyled
        onPress={() => dispatch(login({email: '', password: ''}))}
        backgroundColor={theme.GRAY_COLOR}
        color={theme.WHITE_COLOR}
        text={'Iniciar Sesion'}
      />
      <Text>Olvido su contrase;a?</Text>
      <Text>+ velocidad + estabilidad + inovacion</Text>

      <Button
        title="Register"
        onPress={() => this.props.navigation.push('Register')}
      />
    </View>
  );
};

export default LoginClient;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
