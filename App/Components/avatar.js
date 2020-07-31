import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Image,
  Platform,
  Button,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import globalStyles from '../styles';

const options = {
  title: 'Seleccionar Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const Avatar = ({image, setImage}) => {
  return (
    <View style={{...styles.view}}>
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Button
          title="Image"
          onPress={async () => {
            let granted = false;
            let canUse = false;
            if (Platform.OS === 'android') {
              granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                  title: 'We need your permission',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                canUse = true;
              }
            }

            if (Platform.OS === 'ios') {
              canUse = true;
            }

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
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
  },
  image: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
});
