import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignupPartialData} from '../../actions/auth';
import globalStyles from '../../styles';
import {InputStyled} from '../../Components/input';
import {ButtonStyled} from '../../Components/button';
import ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';

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
  const [password, setPassword] = useState('12341234');
  const [cedularif, setCedulaRif] = useState('');
  const [nombrerzb, setNombreRzb] = useState('');
  const [phone, setPhone] = useState('');
  const [repassword, setRepassword] = useState('12341234');

  return (
    <View style={styles.view}>
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Button
          title="Image"
          onPress={async () => {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'We need your permission',
              },
            );
            
            let canUse = false;
            if (granted === PermissionsAndroid.RESULTS.GRANTED && Platform.OS === 'android') canUse = true
            if (Platform.OS === 'ios') canUse = true
            
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
                  console.log(source);
                }
              });
            }
          }}
        />
      )}
      <>
        <View>
          <Text>Sasha Gray</Text>
        </View>
      </>

      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>Register Client!</Text>
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
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    marginTop: -30,
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
});
