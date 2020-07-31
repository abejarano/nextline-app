import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  Text,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';

export const GeolocationModal = ({
  hasLocationPermission,
  setHasLocationPermission,
  setPosition,
}) => {
  useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (positionData) => {
          setPosition(positionData);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [hasLocationPermission, setPosition]);
  return (
    <Modal
      animationType="slide"
      visible={!hasLocationPermission}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>

          <TouchableHighlight
            style={styles.openButton}
            onPress={async () => {
              let granted;
              if (Platform.OS === 'ios') {
                granted = await Geolocation.requestAuthorization('whenInUse');
              } else {
                granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                  {
                    title: 'Nextline',
                    message: 'Nextline access to your location ',
                  },
                );
              }
              if (granted) {
                setHasLocationPermission(true);
              }
            }}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  view: {
    width: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
