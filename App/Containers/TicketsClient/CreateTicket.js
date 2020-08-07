import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, StyleSheet, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../styles';
import {Avatar} from '../../Components/avatar';
import {AuthHeader} from '../../Components/authHeader';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonStyled } from '../../Components/button';
import { InputStyled } from '../../Components/input';
import { StyledStatusBar } from '../../Components/statusBar';
import SolidLogo from '../../assets/svg/SolidLogo';

export const CreateTicketsScreen = ({navigation}) => {
	
  const status = useSelector(
    (state) => state.servicio.status.data.solicitud_servicio,
  );
  const user = useSelector((state) => state.auth.user);
  const plan = useSelector((state) => state.plans.selected);
  const service = useSelector((state) => state.servicio.selected);
	const isClient = useSelector((state) => state.auth.isClient);
	
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.view}>
        <StyledStatusBar />
        <AuthHeader 
          title="ASISTENCIA TÉCNICA"
          navigation={navigation}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <KeyboardAvoidingView
          behavior="height"
          style={styles.keyboardContainer}>
          
          <View style={styles.inputContainer}>
            <InputStyled
              placeholder="Email"
              onChange={(text) => { }}
              iconColor={globalStyles.PRIMARY_COLOR}
            />
            <InputStyled
              placeholder="Clave"
              secureTextEntry={true}
              onChange={(text) => { }}
              iconColor={globalStyles.PRIMARY_COLOR}
            />
          </View>
          <Text style={styles.forgetText}>¿Olvidó su contraseña?</Text>
        </KeyboardAvoidingView>
        <ButtonStyled
          onPress={() => {} }
          backgroundColor={globalStyles.GREEN_COLOR}
          color={globalStyles.WHITE_COLOR}
          text={'INGRESAR'}
        />

        <>
          <View style={styles.division}>
            <Text numberOfLines={1} style={styles.texDivision}>
              _______________________________________________
            </Text>
          </View>
        </>
 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9F9F9',
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

export default CreateTicketsScreen;   