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
    <>
      <SafeAreaView style={styles.safe}>
        <View style={styles.view}>
          <ImageBackground
            source={require('../../assets/images/login_wallpapers/60.png')}
            style={globalStyles.BACKGROUNDIMAGE}>
            <Header backVisible={false} />
            <SolidLogo color={globalStyles.WHITE_COLOR} />

            <KeyboardAvoidingView
              behavior="padding"
              style={styles.keyboardContainer}
              keyboardVerticalOffset={8}>
              <InputStyled
                placeholder="Email ..."
                onChange={(text) => {
                  setEmail(text);
                }}
                value={email}
                Icon={EmailSvg}
                iconColor={globalStyles.PRIMARY_COLOR}
              />
              <InputStyled
                placeholder="Clave ..."
                secureTextEntry={true}
                onChange={(text) => {
                  setPassword(text);
                }}
                style={styles.button}
                Icon={LockSvg}
                iconColor={globalStyles.PRIMARY_COLOR}
              />
              <Text style={styles.forgetText}>Olvido su contraseña?</Text>

              <ButtonStyled
                onPress={() => dispatch(login({email: email, clave: password}))}
                backgroundColor={globalStyles.GREEN_COLOR}
                color={globalStyles.WHITE_COLOR}
                text={'INGRESAR'}
                style={styles.button}
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
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginClient;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  header: {
    backgroundColor: globalStyles.WHITE_COLOR,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: globalStyles.WHITE_COLOR,
  },
  button: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    color: globalStyles.WHITE_COLOR,
    margin: 10,
  },
  forgetText: {
    color: globalStyles.WHITE_COLOR,
    margin: 10,
    textDecorationLine: 'underline',
  },
  text: {
    color: globalStyles.WHITE_COLOR,
    margin: 10,
  },
  division: {
    margin: 20,
  },
  texDivision: {
    color: globalStyles.WHITE_COLOR,
  },
  register: {
    color: 'red',
  },
  keyboardContainer: {
    alignItems: 'center',
    padding: 0,
    width: '100%',
    marginBottom: '10%',
  },
});
