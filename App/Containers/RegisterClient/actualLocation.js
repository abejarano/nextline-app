import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ActualLocation = ({navigation}) => {
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/auth.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <Header navigation={navigation} />
        <Title text={'Domicilio de Instalacion'} />
        <View style={styles.questionGroup}>
          <Text numberOfLines={2} style={styles.question}>
            ¿Esta usted en el sitio donde se va a instalar el servicios?
          </Text>
          <View style={styles.optionsGroup}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                navigation.push('LocationDetails');
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
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: globalStyles.BACKGROUND_BOTOM,
    flex: 1,
    alignItems: 'center',
  },
  questionGroup: {
    paddingTop: '20%',
  },
  question: {
    color: globalStyles.WHITE_COLOR,
    fontSize: 21,
    margin: '8%',
    textAlign: 'center',
  },
  optionsGroup: {
    flex: 1,
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-evenly',
    marginLeft: '20%',
  },
  option: {
    backgroundColor: globalStyles.WHITE_COLOR,
    padding: 15,
    borderRadius: 24,
    width: 90,
    // margin: ,
  },
  optionText: {
    color: globalStyles.PRIMARY_COLOR_DARK,
    textTransform: 'uppercase',
    fontSize: 30,
    textAlign: 'center',
  },
});
