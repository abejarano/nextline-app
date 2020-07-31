import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignupPartialData} from '../../actions/auth';
import globalStyles from '../../styles';
import {InputStyled} from '../../Components/input';
import {ButtonStyled} from '../../Components/button';
import {KeyboardAvoidingView} from 'react-native';
import ArrowPointerSvg from '../../assets/svg/ArrowPointer';
import {Header} from '../../Components/header';
import {Title} from '../../Components/title';

export function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('12341234');
  const [cedularif, setCedulaRif] = useState('');
  const [nombrerzb, setNombreRzb] = useState('');
  const [phone, setPhone] = useState('');
  const [repassword, setRepassword] = useState('12341234');

  return (
    <View style={styles.view}>
      <Header navigation={navigation} />
      <Title text={'Formulario Personal'} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardContainer}
          keyboardVerticalOffset={8}>
          <InputStyled
            placeholder="Nombre o razon social"
            onChange={(text) => {
              setNombreRzb(text);
            }}
            style={styles.button}
          />
          <InputStyled
            placeholder="Cedula o RIF"
            onChange={(text) => {
              setCedulaRif(text);
            }}
            style={styles.button}
          />
          <InputStyled
            placeholder="Email"
            onChange={(text) => {
              setEmail(text);
            }}
            style={styles.button}
          />
          <InputStyled
            placeholder="Telefono"
            onChange={(text) => {
              setPhone(text);
            }}
            style={styles.button}
          />
          <InputStyled
            placeholder="Clave"
            secureTextEntry={true}
            onChange={(text) => {
              setPassword(text);
            }}
            style={styles.button}
          />
          <InputStyled
            placeholder="Confirmar clave"
            secureTextEntry={true}
            onChange={(text) => {
              setRepassword(text);
            }}
            style={styles.button}
          />
        </KeyboardAvoidingView>

        <ButtonStyled
          onPress={() => {
            if (repassword === password) {
              dispatch(
                setSignupPartialData({
                  nombre_razsoc: nombrerzb,
                  cedula_rif: cedularif,
                  correo: email,
                  celular: phone,
                  clave: password,
                }),
              );
              navigation.push('PlanSelect');
            }
          }}
          backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
          color={globalStyles.WHITE_COLOR}
          text={'Continuar'}
          styleText={styles.button}
          Icon={ArrowPointerSvg}
          iconColor={globalStyles.WHITE_COLOR}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: globalStyles.BACKGROUND_BOTOM,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardContainer: {
    alignItems: 'center',
    padding: 0,
    width: '100%',
    marginBottom: '10%',
  },
  scrollView: {
    padding: 0,
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
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
  },
});
