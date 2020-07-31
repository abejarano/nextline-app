import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';

export const ActualLocation = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Header navigation={navigation} />
      <Title text={'Domicilio de Instalacion'} />
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
