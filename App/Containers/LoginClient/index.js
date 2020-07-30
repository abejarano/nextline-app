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
} from 'react-native';
import {login} from '../../actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonStyled} from '../../Components/button';
import {InputStyled} from '../../Components/input';
import {LogoLogin} from '../../Components/LogoLogin';
import globalStyles from '../../styles';

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
      <View style={styles.view}>

        <ImageBackground source={require('../../assets/images/login_wallpapers/60.png')}  style={styles.backgroundImage} >
          <LogoLogin />

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
            />
            <InputStyled
              placeholder="Clave ..."
              secureTextEntry={true}
              onChange={(text) => {
                setPassword(text);
              }}
              style={styles.button}
            />
            <Text style={styles.text}>Olvido su contraseña?</Text>

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
    </>
  );
};

export default LoginClient;

const styles = StyleSheet.create({
  backgroundImage: {
    marginTop: 40,
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    alignItems:'center',
  },
  header: {
    backgroundColor: globalStyles.WHITE_COLOR,
    marginTop: 25,
    marginBottom: -203,
  },
  view: {
    backgroundColor: '#0058af',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {},
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
  text: {
    color: globalStyles.WHITE_COLOR,
    margin: 10,
  },
  division: {
    margin: 20,
  },
  texDivision: {
    color: globalStyles.WHITE_COLOR
  },  
  register: {
    color: 'red',
  },
  keyboardContainer: {
    alignItems: 'center',
    padding: 0,
    width: '100%',
  },
});
