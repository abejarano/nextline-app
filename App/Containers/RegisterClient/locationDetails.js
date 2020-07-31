import React, {useState} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Text} from 'react-native';
import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';
import {ButtonStyled} from '../../Components/button';
import {signup} from '../../actions/auth';
import ArrowPointerSvg from '../../assets/svg/ArrowPointer';
import {useDispatch} from 'react-redux';
import {InputStyled} from '../../Components/input';

export const LocationDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const [direction, setDirection] = useState('');
  const [refpoint, setRefpoint] = useState('');
  return (
    <View style={styles.view}>
      <Header navigation={navigation} />
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
            dispatch(signup());
          }}
          backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
          color={globalStyles.WHITE_COLOR}
          text={'Finalizar solicitud'}
          styleText={styles.continueButton}
          Icon={ArrowPointerSvg}
          iconColor={globalStyles.WHITE_COLOR}
        />
      </View>
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
