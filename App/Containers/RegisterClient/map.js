import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';

export const MapView = ({navigation}) => {
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/auth.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <Header navigation={navigation} />
        <Title text={'Domicilio de Instalacion'} />
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
});
