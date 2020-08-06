import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {login, resetErrorAuth} from '../../actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonStyled} from '../../Components/button';
import {InputStyled} from '../../Components/input';
import globalStyles from '../../styles';
import EmailSvg from '../../assets/svg/Email';
import SolidLogo from '../../assets/svg/SolidLogo';
import LockSvg from '../../assets/svg/Lock';
import {Header} from '../../Components/header';

const LoginClient = ({navigation}) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.sending);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (error !== '') {
      Alert.alert('Error al autenticarse :(', error, [
        {
          text: 'Continuar',
          onPress: () => {
            dispatch(resetErrorAuth());
          },
        },
      ]);
    }
  }, [error, dispatch]);

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../assets/images/login_wallpapers/60.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <View style={styles.view}>
          <Header backVisible={false} />
          <KeyboardAvoidingView
            behavior="height"
            style={styles.keyboardContainer}>
            <SolidLogo
              color={globalStyles.WHITE_COLOR}
              style={styles.logo}
              withText={true}
            />
            <View style={styles.inputContainer}>
              <InputStyled
                placeholder="Email"
                onChange={(text) => {
                  setEmail(text);
                }}
                value={email}
                Icon={EmailSvg}
                iconColor={globalStyles.PRIMARY_COLOR}
              />
              <InputStyled
                placeholder="Clave"
                secureTextEntry={true}
                onChange={(text) => {
                  setPassword(text);
                }}
                Icon={LockSvg}
                iconColor={globalStyles.PRIMARY_COLOR}
              />
            </View>
            <Text style={styles.forgetText}>¿Olvidó su contraseña?</Text>
          </KeyboardAvoidingView>
          <ButtonStyled
            onPress={() => dispatch(login({email: email, clave: password}))}
            backgroundColor={globalStyles.GREEN_COLOR}
            color={globalStyles.WHITE_COLOR}
            text={'INGRESAR'}
            disabled={loading}
            loading={loading}
          />

          <>
            <View style={styles.division}>
              <Text numberOfLines={1} style={styles.texDivision}>
                _______________________________________________
              </Text>
            </View>
          </>

          <ButtonStyled
            onPress={() => {
              navigation.push('ServiceSelect');
            }}
            backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
            color={globalStyles.WHITE_COLOR}
            text={'SOLICITA TU SERVICIO'}
            style={styles.button}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginClient;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#085da2',
  },
  logo: {
    flex: 1,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    backgroundColor: globalStyles.WHITE_COLOR,
  },
  button: {
    marginBottom: '10%',
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'space-evenly',
    maxHeight: 150,
  },
  forgetText: {
    color: globalStyles.WHITE_COLOR,
    margin: '2.5%',
    textDecorationLine: 'underline',
  },
  text: {
    color: globalStyles.WHITE_COLOR,
    margin: '2.5%',
  },
  division: {
    padding: '5%',
  },
  texDivision: {
    color: globalStyles.WHITE_COLOR,
  },
  register: {
    color: 'red',
  },
  keyboardContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
