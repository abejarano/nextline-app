import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {login} from '../../actions/auth';
import {useDispatch} from 'react-redux';
import {ButtonStyled} from '../../Components/button';
import {InputStyled} from '../../Components/input';
import { LogoLogin } from '../../Components/LogoLogin';
import theme from '../../styles';
import globalStyles from '../../styles';

const LoginClient = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.view}>
        <LogoLogin />
        <Text style={styles.title}>Bienvenido!</Text>
        <Text style={styles.text}>Inicia sesion para disfrutar de nuestros servicios</Text>
        <InputStyled value="Email ..."  />
        <InputStyled value="Clave ..." secureTextEntry={true} style={styles.button} />
        <ButtonStyled
          onPress={() => dispatch(login({email: '', password: ''}))}
          backgroundColor={theme.GRAY_COLOR}
          color={theme.WHITE_COLOR}
          text={'Iniciar Sesion'}
          style={styles.button}
        />
        <Text style={styles.text}>Olvido su contraseña?</Text>
        <Text style={styles.text}>+ velocidad + estabilidad + inovacion</Text>
        <Button title="Registro/Solicitar Servicio" onPress={() => navigation.push('Register')} />
      </View>
    </>
  );
};

export default LoginClient;
const styles = StyleSheet.create({
  header: {
    backgroundColor: globalStyles.WHITE_COLOR,
    marginTop: 25,
    marginBottom: -203
  },
  view: {
    marginTop: -30,
    backgroundColor: globalStyles.PRIMARY_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    
  }, 
  input: {
    backgroundColor: '#f5f5f5',
  },
  button: {
    marginTop: 10
  },
  title: {
    fontSize: 20,
    color: globalStyles.WHITE_COLOR,
    margin: 10
  },
  text: {
    color: globalStyles.WHITE_COLOR,
    margin: 10
  },
  register: {
    color: 'red'
  }
});
