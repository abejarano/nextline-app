import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  ImageBackground,
  Alert,
} from 'react-native';
import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';
import {ButtonStyled} from '../../Components/button';
import {signup, setSignupPartialData, resetErrorAuth} from '../../actions/auth';
import ArrowPointerSvg from '../../assets/svg/ArrowPointer';
import {useDispatch, useSelector} from 'react-redux';
import {InputStyled} from '../../Components/input';
import {resetStore} from '../../actions/utils';
import {StyledStatusBar} from '../../Components/statusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from '../../utils';
import {useFormik} from 'formik';
export const LocationDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      direction: '',
      refpoint: '',
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

      return errors;
    },
    onSubmit: (values, {setSubmitting}) => {
      dispatch(signup(values.direction + ' ' + values.refpoint));
    },
  });
  const [direction, setDirection] = useState('');
  const [refpoint, setRefpoint] = useState('');
  const loading = useSelector((state) => state.auth.sending);
  const message = useSelector((state) => state.auth.message);
  const error = useSelector((state) => state.auth.error);

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

  useEffect(() => {
    if (message !== '') {
      Alert.alert('Registro exitoso!', 'Por favor has loguin para continuar', [
        {
          text: 'Continuar',
          onPress: () => {
            dispatch(resetStore());
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          },
        },
      ]);
    }
  }, [message, navigation, dispatch]);
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
                  latitud: null,
                  longitud: null,
                }),
              );
            }}
          />
          <Title text={'Domicilio de Instalación'} />
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.keyboardContainer}
            keyboardVerticalOffset={8}>
            <InputStyled
              placeholder="Dirección"
              value={formik.values.direction}
              onBlur={formik.handleBlur('direction')}
              onChange={formik.handleChange('direction')}
              valid={!formik.errors.direction && !formik.touched.direction}
              // Icon={DirectionSvg}
              iconColor={globalStyles.PRIMARY_COLOR}
            />
            <InputStyled
              placeholder="Refpoint ..."
              value={formik.values.refpoint}
              onBlur={formik.handleBlur('refpoint')}
              onChange={formik.handleChange('refpoint')}
              valid={!formik.errors.refpoint && !formik.touched.refpoint}
              // Icon={RefpointSvg}
              iconColor={globalStyles.PRIMARY_COLOR}
            />
          </KeyboardAvoidingView>
          <Text numberOfLines={2} style={styles.question}>
            Antes de finalizar confirme si su ubicación es correcta
          </Text>
          <View style={styles.buttonContainer}>
            <ButtonStyled
              onPress={() => {
                formik.handleSubmit();
              }}
              loading={loading}
              disabled={loading}
              backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
              color={globalStyles.WHITE_COLOR}
              text={'Finalizar solicitud'}
              styleText={styles.continueButton}
              Icon={ArrowPointerSvg}
              iconColor={globalStyles.WHITE_COLOR}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: globalStyles.PRIMARY_COLOR_DARK,
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  keyboardContainer: {
    width: '100%',
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  continueButton: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    marginBottom: '10%',
  },
  question: {
    color: globalStyles.WHITE_COLOR,
    fontSize: scale(20),
    width: '80%',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontFamily: globalStyles.TREBUCHET_BOLD_FONT,
  },
});
