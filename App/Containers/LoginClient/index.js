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
import {scale, validateEmail} from '../../utils';
import {useFormik} from 'formik';

const LoginClient = ({navigation}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    // Custom sync validation
    validate: (values) => {
      const errors = {};

      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const element = values[key];
          if (!element) {
            errors[key] = key + ' es requerido';
          }
        }
      }

      if (values.password.length < 8) {
        errors.password = 'La clave debe de ser de 8 o mas digitos';
      }
      if (!validateEmail(values.email)) {
        errors.email = 'Email invalido';
      }
      return errors;
    },
    onSubmit: ({email, password}, {setSubmitting}) => {
      dispatch(login({email: email, clave: password}));
    },
  });
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
                value={formik.values.email}
                onBlur={formik.handleBlur('email')}
                onChange={formik.handleChange('email')}
                valid={!(formik.touched.email && formik.errors.email)}
                Icon={EmailSvg}
                iconColor={globalStyles.PRIMARY_COLOR}
              />
              <InputStyled
                placeholder="Clave"
                secureTextEntry={true}
                value={formik.values.password}
                onBlur={formik.handleBlur('password')}
                onChange={formik.handleChange('password')}
                valid={!(formik.touched.password && formik.errors.password)}
                Icon={LockSvg}
                iconColor={globalStyles.PRIMARY_COLOR}
              />
            </View>
            <Text style={styles.forgetText}>¿Olvidó su contraseña?</Text>
          </KeyboardAvoidingView>
          <ButtonStyled
            onPress={() => formik.handleSubmit()}
            backgroundColor={globalStyles.GREEN_COLOR}
            color={globalStyles.WHITE_COLOR}
            text={'INGRESAR'}
            disabled={loading}
            loading={loading}
            styleText={styles.styleButtonText}
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
            styleText={styles.styleButtonText}
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
  button: {
    marginBottom: '10%',
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
    fontFamily: globalStyles.TREBUCHET_FONT,
    fontSize: scale(12),
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
  keyboardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  styleButtonText: {
    fontSize: scale(20),
  },
});
