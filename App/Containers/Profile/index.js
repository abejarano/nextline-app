import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, Platform, KeyboardAvoidingView} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignupPartialData, signout} from '../../actions/auth';
import globalStyles from '../../styles';
import {InputStyled} from '../../Components/input';
import {ButtonStyled} from '../../Components/button';
import ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const options = {
  title: 'Seleccionar Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export function ProfileScreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [imageModeUri, setImageModeUri] = useState(false);
  const [password, setPassword] = useState('12341234');
  const [cedularif, setCedulaRif] = useState('');
  const [nombrerzb, setNombreRzb] = useState('');
  const [phone, setPhone] = useState('');
  const [repassword, setRepassword] = useState('12341234');
  const imgPlaceHolder = 'https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png';
  const user = {
    name: "Sasha Gray",
    image: 'https://www.gstatic.com/tv/thumb/persons/500192/500192_v9_ba.jpg'
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardContainer}
      keyboardVerticalOffset={8}>

      <ScrollView style={styles.keyboardContainer}>
        <View style={styles.view}>
          {imageModeUri ? (
            <Image source={image} style={styles.image} />
          ) : (
            <Image source={{uri: user.image}} style={styles.image} />
          )}

          <Button
            title="Editar foto de perfil"
            onPress={async () => {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                  title: 'We need your permission',
                },
              );

              let canUse = false;
              if (
                granted === PermissionsAndroid.RESULTS.GRANTED &&
                Platform.OS === 'android'
              )
                canUse = true;
              if (Platform.OS === 'ios') canUse = true;

              if (canUse) {
                ImagePicker.showImagePicker(options, (response) => {
                  console.log('Response = ', response);

                  if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else if (response.customButton) {
                    console.log(
                      'User tapped custom button: ',
                      response.customButton,
                    );
                  } else {
                    // const source = {uri: response.uri};

                    // You can also display the image using data:
                    const source = response;
                    setImage(source);
                    setImageModeUri(true);
                    console.log(source);
                  }
                });
              }
            }}
          />
          <>
            <View>
              <Text style={styles.userName}>{user.name}</Text>
            </View>
          </>

            <InputStyled
              placeholder="Nombre o razon social"
              onChange={(text) => {
                setNombreRzb(text);
              }}
              style={styles.input}
            />
            <InputStyled
              placeholder="Cedula o RIF"
              onChange={(text) => {
                setCedulaRif(text);
              }}
              style={styles.input}
            />
            <InputStyled
              placeholder="Email"
              onChange={(text) => {
                setEmail(text);
              }}
              style={styles.input}
            />
            <InputStyled
              placeholder="Telefono"
              onChange={(text) => {
                setPhone(text);
              }}
              style={styles.input}
            />
            <>  
              <View style={styles.paswwordChange}>
                <Text style={styles.paswwordChange}>Cambio de clave</Text>
              </View>
            </>
            <InputStyled
              placeholder="Antigua clave"
              secureTextEntry={true}
              onChange={(text) => {
                setPassword(text);
              }}
              style={styles.input}
            />
            <InputStyled
              placeholder="Nueva clave"
              secureTextEntry={true}
              onChange={(text) => {
                setRepassword(text);
              }}
              style={styles.input}
            />
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
              backgroundColor={globalStyles.GRAY_COLOR}
              color={globalStyles.WHITE_COLOR}
              text={'Aceptar'}
              style={styles.button}
            />
            <ButtonStyled
              onPress={() => {
                dispatch(signout());
              }}
              backgroundColor={globalStyles.GRAY_COLOR}
              color={globalStyles.WHITE_COLOR}
              text={'Cerrar sesion'}
              style={styles.button}
            />


        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
}
const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    backgroundColor: globalStyles.WHITE_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  userName: {
    color: globalStyles.PRIMARY_COLOR,
  },
  paswwordChange: {
    marginTop: 20,
    color: globalStyles.GRAY_COLOR,
  },
  input: {
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
  },
  keyboardContainer: {
    padding: 0,
    width: '100%',
  },
});
