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
import {signup, setSignupPartialData} from '../../actions/auth';
import ArrowPointerSvg from '../../assets/svg/ArrowPointer';
import {useDispatch, useSelector} from 'react-redux';
import {InputStyled} from '../../Components/input';
import {resetStore} from '../../actions/utils';
export const LocationDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const [direction, setDirection] = useState('');
  const [refpoint, setRefpoint] = useState('');
  const loading = useSelector((state) => state.auth.sending);
  const message = useSelector((state) => state.auth.message);
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
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/auth.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
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
        <Title text={'Domicilio de Instalacion'} />
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardContainer}
          keyboardVerticalOffset={8}>
          <InputStyled
            placeholder="Direccion"
            onChange={(text) => {
              setDirection(text);
            }}
            value={direction}
            // Icon={DirectionSvg}
            iconColor={globalStyles.PRIMARY_COLOR}
          />
          <InputStyled
            placeholder="Refpoint ..."
            onChange={(text) => {
              setRefpoint(text);
            }}
            value={refpoint}
            // Icon={RefpointSvg}
            iconColor={globalStyles.PRIMARY_COLOR}
          />
        </KeyboardAvoidingView>
        <Text numberOfLines={2} style={styles.question}>
          Antes de finalizar confirme si su ubicaciones es correcta
        </Text>
        <View style={styles.buttonContainer}>
          <ButtonStyled
            onPress={() => {
              dispatch(signup(direction + ' ' + refpoint));
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
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: globalStyles.BACKGROUND_BOTOM,
    flex: 1,
    alignItems: 'center',
  },
  keyboardContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: '10%',
  },
  continueButton: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    marginTop: 50,
  },
  question: {
    color: globalStyles.WHITE_COLOR,
    fontSize: 21,
    width: 282,
    textAlign: 'center',
  },
});
