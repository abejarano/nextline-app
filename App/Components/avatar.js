import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Image,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import globalStyles from '../styles';
import ProfileSvg from '../assets/svg/Profile';
import {verticalScale} from '../utils';

const options = {
  title: 'Seleccionar Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const onPress = async (setImage) => {
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
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = {uri: response.uri};

        // You can also display the image using data:
        const source = response;
        // console.log()
        setImage(source);
      }
    });
  }
};

export const Avatar = ({image, setImage}) => {
  return (
    <View style={{...styles.view}}>
      <TouchableOpacity
        onPress={() => {
          onPress(setImage);
        }}>
        {image ? (
          <Image source={image} style={styles.image} />
        ) : (
          <View style={styles.imageEmpty} title="Image">
            <ProfileSvg color={globalStyles.PRIMARY_COLOR} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
  },
  image: {
    borderRadius: 100,
    height: verticalScale(80),
    width: verticalScale(80),
  },
  imageEmpty: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    height: 80,
    width: 80,
    backgroundColor: globalStyles.WHITE_COLOR,
  },
});
