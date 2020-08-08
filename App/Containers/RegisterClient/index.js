import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignupPartialData} from '../../actions/auth';
import ArrowPointerSvg from '../../assets/svg/ArrowPointer';
import {InputStyled} from '../../Components/input';
import {ButtonStyled} from '../../Components/button';
import {Header} from '../../Components/header';
import {Title} from '../../Components/title';
import globalStyles from '../../styles';
import {Avatar} from '../../Components/avatar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyledStatusBar} from '../../Components/statusBar';
import {scale} from '../../utils';
import {useFormik} from 'formik';

export function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      cedularif: '',
      nombrerzb: '',
      phone: '',
      repassword: '',
    },

    // Custom sync validation
    validate: (values) => {
      const errors = {};

      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const element = values[key];
          if (!element) {
            errors[key] = 'Requerido';
          }
        }
      }
      if (values.password !== values.repassword) {
        errors.repassword = 'No es igual a la password';
      }

      if (values.password.length < 8) {
        errors.password = 'La contrase;a debe de ser de 8 o mas digitos';
      }
      // if (
      //   /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/.test(
      //     values.email,
      //   )
      // ) {
      //   errors.email = 'Email invalido';
      // }
      return errors;
    },
    onSubmit: (values, {setSubmitting}) => {
      dispatch(
        setSignupPartialData({
          nombre_razsoc: values.nombrerzb,
          cedula_rif: values.cedularif,
          correo: values.email,
          celular: values.phone,
          clave: values.password,
          avatar: image.data,
        }),
      );
      navigation.push('ActualLocation');
    },
  });
  const [image, setImage] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/auth.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <View style={styles.view}>
          <StyledStatusBar />
          <Header
            navigation={navigation}
            onPress={() => {
              navigation.goBack();
              dispatch(
                setSignupPartialData({
                  nombre_razsoc: '',
                  cedula_rif: '',
                  correo: '',
                  celular: '',
                  clave: '',
                  avatar: '',
                }),
              );
            }}
          />
          <Title text={'Formulario Personal'} />
          <KeyboardAvoidingView
            behavior={'position'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -240}
            style={styles.keyboardContainer}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewContent}>
              <Avatar image={image} setImage={setImage} />
              <Text style={styles.texDivision}>
                Toque el icono de usuario para agregar su foto
              </Text>
              <InputStyled
                placeholder="Nombre o razon social"
                value={formik.values.nombrerzb}
                onBlur={formik.handleBlur('nombrerzb')}
                onChange={formik.handleChange('nombrerzb')}
                style={styles.nombrerzb}
                valid={!formik.errors.nombrerzb}
              />
              <InputStyled
                placeholder="Cedula o RIF"
                value={formik.values.cedularif}
                onBlur={formik.handleBlur('cedularif')}
                onChange={formik.handleChange('cedularif')}
                valid={!formik.errors.cedularif}
                style={styles.button}
              />
              <InputStyled
                placeholder="Email"
                value={formik.values.email}
                onBlur={formik.handleBlur('email')}
                onChange={formik.handleChange('email')}
                valid={!formik.errors.email}
                style={styles.button}
              />
              <InputStyled
                placeholder="Telefono"
                value={formik.values.phone}
                onBlur={formik.handleBlur('phone')}
                onChange={formik.handleChange('phone')}
                valid={!formik.errors.phone}
                style={styles.button}
              />
              <InputStyled
                placeholder="Clave"
                secureTextEntry={true}
                value={formik.values.password}
                onBlur={formik.handleBlur('password')}
                onChange={formik.handleChange('password')}
                valid={!formik.errors.password}
                style={styles.button}
              />
              <InputStyled
                placeholder="Confirmar clave"
                secureTextEntry={true}
                value={formik.values.repassword}
                onBlur={formik.handleBlur('repassword')}
                onChange={formik.handleChange('repassword')}
                valid={!formik.errors.repassword}
                style={styles.button}
              />
              <View style={styles.buttonContainer}>
                <ButtonStyled
                  onPress={() => {
                    if (Object.keys(formik.errors).length > 0) {
                      alert(JSON.stringify(formik.errors));
                    } else {
                      formik.handleSubmit();
                    }
                  }}
                  backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
                  color={globalStyles.WHITE_COLOR}
                  text={'Continuar'}
                  styleText={styles.continueButton}
                  Icon={ArrowPointerSvg}
                  // disabled={!!formik.errors}
                  iconColor={globalStyles.WHITE_COLOR}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: globalStyles.PRIMARY_COLOR_DARK,
  },
  view: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 0,
    width: '100%',
    overflow: 'hidden',
    // marginBottom: '10%',
  },
  scrollView: {
    padding: 0,
    marginTop: '5%',
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
  },
  continueButton: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    margin: '5%',
  },
  title: {
    height: '10%',
    display: 'flex',
    width: '100%',
    marginLeft: '15%',
    marginBottom: '10%',
  },
  titleText: {
    fontSize: 45,
    marginLeft: '2%',
    fontWeight: 'bold',
    color: globalStyles.WHITE_COLOR,
  },
  texDivision: {
    color: globalStyles.WHITE_COLOR,
    margin: '3%',
    fontSize: scale(14),
    fontFamily: globalStyles.TREBUCHET_FONT,
  },
});
