import React from 'react';
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
import LocationSvg from '../assets/svg/WorldLocation';
import globalStyles from '../styles';

export const FailureTypeModal = ({
  showModal,
  setShowModal,
  failures,
  setFailureId,
}) => {
  const FailItem = ({failure}) => {
    return (
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          console.log('click modal');
          setFailureId(failure.id);
          setShowModal(false);
        }}>
        <Text style={styles.textStyle}>{failure.descripcion}</Text>
      </TouchableOpacity>
    );
  };

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
          {failures.map((failure) => (
            <FailItem key={failure.id} failure={failure} />
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globalStyles.PRIMARY_COLOR,
    opacity: 0.97,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 15,
    marginTop: 30,
    width: '100%',
    height: '100%',
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
    textAlign: 'center',
  },
  textStyle: {
    color: globalStyles.PRIMARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  openButton: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 15,
    margin: 10,
    elevation: 2,
  },
});
