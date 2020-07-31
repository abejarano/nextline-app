import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';

export const ChooseService = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Header navigation={navigation} />
      <Title text={'Selecciona un Servicios'} />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: globalStyles.BACKGROUND_BOTOM,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
