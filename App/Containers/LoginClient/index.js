import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {login} from '../../actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonStyled} from '../../Components/button';
import {InputStyled} from '../../Components/input';
import globalStyles from '../../styles';
import EmailSvg from '../../assets/svg/Email';
import SolidLogo from '../../assets/svg/SolidLogo';
import InfoSvg from '../../assets/svg/Info';
import LockSvg from '../../assets/svg/Lock';

const LoginClient = ({navigation}) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (error !== '') {
      Alert.alert('Error al autenticarse :(', error);
    }
  }, [error]);

  return (
    <>
      <SafeAreaView style={styles.safe}>
        <View style={styles.view}>
          <ImageBackground
            source={require('../../assets/images/login_wallpapers/60.png')}
            style={styles.backgroundImage}>
            <InfoSvg style={styles.info} color={globalStyles.WHITE_COLOR} />
            <SolidLogo color={globalStyles.WHITE_COLOR} />

            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
              />

              <>
                <View style={styles.division}>
                  <Text numberOfLines={1} style={styles.texDivision}>
                    _______________________________________________
                  </Text>
                </View>
              </>

              <ButtonStyled
                onPress={() => dispatch(login({email: email, clave: password}))}
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    backgroundColor: globalStyles.WHITE_COLOR,
  },
  view: {
    backgroundColor: '#0058af',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    alignSelf: 'flex-end',
    marginRight: '5%',
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
