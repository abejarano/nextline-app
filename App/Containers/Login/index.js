import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {login} from '../../actions/auth';
import {useDispatch} from 'react-redux';
import {Button} from '../../Components/button';

export const LoginContainer = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Bienvenido!</Text>
      <Text>Inicia sesion para disfrutar de nuestros servicios</Text>
      <TextInput>Email</TextInput>
      <TextInput>clave</TextInput>
      <Button
        onPress={() => dispatch(login({email: '', password: ''}))}
        backgroundColor="#57585a"
        color="#f5f5f5"
        text={'Iniciar Sesion'}
      />
      <Text>Olvido su contrase;a?</Text>
      <Text>+ velocidad + estabilidad + inovacion</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    textAlign: 'center',
    position: 'absolute',
    right: 0,
  },
  body: {
    textAlign: 'center',
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});
