import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  Text,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import LocationSvg from '../assets/svg/WorldLocation';
import globalStyles from '../styles';
import {useDispatch} from 'react-redux';
import {setSignupPartialData} from '../actions/auth';

export const GeolocationModal = ({
  hasLocationPermission,
  setHasLocationPermission,
  setPosition,
  showModal,
  setShowModal,
  navigation,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (positionData) => {
          console.log(positionData);
          dispatch(
            setSignupPartialData({
              latitud: positionData.coords.latitude,
              longitud: positionData.coords.longitude,
            }),
          );
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [hasLocationPermission, setPosition, dispatch]);
  return (
    <Modal
      animationType="slide"
      visible={showModal}
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <LocationSvg color={globalStyles.PRIMARY_COLOR} />
          <Text style={styles.modalTextTitle}>
            Necesitamos acceder a tu localizacion
          </Text>
          <Text style={styles.modalText}>
            Por favor acepta los permisos para que podamos obtener informacion
            sobre tu ubicacion
          </Text>

          <TouchableOpacity
            style={styles.openButton}
            onPress={async () => {
              let granted;
              console.log(granted, 'test');
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
                setShowModal(false);
                navigation.push('LocationDetails');
              }
            }}>
            <Text style={styles.textStyle}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  view: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalView: {
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
    padding: 15,
    width: '80%',
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
  modalTextTitle: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalText: {
    margin: 15,
    // marginBottom: 30,
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
    padding: 15,
    margin: 20,
    elevation: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
