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
import ArrowPointerSvg from '../../assets/svg/ArrowPointer';

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
          
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Nuevo Ticket</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textDate}>01/08/2020</Text>
          </View>
          
          <View style={styles.inputContainer}>
            <View style={styles.viewSelect}>
              <Text style={styles.textLabel}>Tipo de Avería</Text>

              <ArrowPointerSvg
                color={globalStyles.PRIMARY_COLOR}
                direction="left"
                bold
              />
            </View>
            
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.textLabel}>Comentario</Text>
            <InputStyled
              style={styles.textArea}
              isMultiline={true}
              numberOfLines={5}
              placeholder="Explique en breves palabras el problema de su avería, y un técnico se pondrá en contacto con usted en un plazo de 24 horas."
              secureTextEntry={true}
              onChange={(text) => { }}
            />
          </View>

          <ButtonStyled
            onPress={() => {} }
            backgroundColor={globalStyles.GREEN_COLOR}
            color={globalStyles.WHITE_COLOR}
            text={'ENVIAR'}
          />
        </KeyboardAvoidingView>

      </View>
    </SafeAreaView>
  );
};

const boxShadow = {
  shadowColor: "#005FAB",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24,
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
  textContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  textTitle: {
    color: globalStyles.PRIMARY_COLOR,
    fontSize: 17
  },
  textLabel: {
    textTransform: 'uppercase',
    color: globalStyles.PRIMARY_COLOR,
    fontSize: 12,
    marginLeft: '7%',
  },
  textDate: {
    color: globalStyles.PRIMARY_COLOR_DARK
  },
  input: {
    backgroundColor: globalStyles.WHITE_COLOR,
  },
  viewSelect:{
    flexDirection: 'row',
    ...boxShadow
  },
  textArea: {
    maxHeight: 90,
    borderRadius: 6,
    ...boxShadow
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
   
  keyboardContainer: {
    flex: 1,
  },
});

export default CreateTicketsScreen;   