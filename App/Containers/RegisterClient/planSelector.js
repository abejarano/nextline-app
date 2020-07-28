import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Alert,
  Button,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {planFetch, planSelect} from '../../actions/plan';
import Geolocation from 'react-native-geolocation-service';

const PlanItem = ({plan, position}) => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(planSelect({plan, position}));
      }}
      title={plan.plan}
    />
  );
};

export function PlanSelectScreen({navigation}) {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.data);
  const message = useSelector((state) => state.auth.message);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    dispatch(planFetch());
  }, [dispatch]);
  useEffect(() => {
    if (message !== '') {
      Alert.alert('Registro', message);
    }
  }, [message]);

  useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          setPosition(position);
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [hasLocationPermission]);

  return (
    <View style={styles.view}>
      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
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
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
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
      {plans.map((plan) => {
        return (
          <PlanItem
            key={`plan-item-${plan.id}`}
            plan={plan}
            position={position}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
