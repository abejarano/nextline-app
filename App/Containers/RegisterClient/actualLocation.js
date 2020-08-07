import React, {useState} from 'react';
import {StyleSheet, View, ImageBackground, Dimensions} from 'react-native';

import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GeolocationModal} from '../../Components/geolocationModal';
import {scale} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ActualLocation = ({navigation}) => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.view}>
        <GeolocationModal
          hasLocationPermission={hasLocationPermission}
          setHasLocationPermission={setHasLocationPermission}
          setShowModal={setShowModal}
          showModal={showModal}
          navigation={navigation}
        />
        <ImageBackground
          source={require('../../assets/images/wallpapers/auth.png')}
          style={globalStyles.BACKGROUNDIMAGE}>
          <Header navigation={navigation} />
          <Title text={'Domicilio de Instalacion'} />
          <View style={styles.questionGroup}>
            <Text style={styles.question}>
              ¿Esta usted en el sitio donde se
              {Dimensions.get('window').width > 370 ? '\n' : ''} va a instalar
              el servicios?
            </Text>
            <View style={styles.optionsGroup}>
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  setShowModal(true);
                }}>
                <Text style={styles.optionText}>Si</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  navigation.push('Map');
                }}>
                <Text style={styles.optionText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: globalStyles.PRIMARY_COLOR_DARK,
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  questionGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    color: globalStyles.WHITE_COLOR,
    fontSize: scale(21),
    fontFamily: globalStyles.TREBUCHET_BOLD_FONT,
    margin: '8%',
    textAlign: 'center',
  },
  optionsGroup: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-evenly',
  },
  option: {
    backgroundColor: globalStyles.WHITE_COLOR,
    padding: scale(15),
    borderRadius: 24,
    width: scale(90),
  },
  optionText: {
    color: globalStyles.PRIMARY_COLOR_DARK,
    textTransform: 'uppercase',
    fontSize: scale(30),
    textAlign: 'center',
    fontFamily: globalStyles.TREBUCHET_BOLD_FONT,
  },
});
