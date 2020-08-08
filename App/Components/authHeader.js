import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import InfoSvg from '../assets/svg/Info';
import globalStyles from '../styles';
import ArrowPointerSvg from '../assets/svg/ArrowPointer';
import HamburguerSvg from '../assets/svg/Hamburguer';

export const AuthHeader = ({navigation, onPress, title, backVisble}) => {
  return (
    <View style={styles.view}>
      <View style={styles.back}>
        {backVisble && (
          <TouchableOpacity
            onPress={
              onPress
                ? onPress
                : () => {
                    navigation.goBack();
                  }
            }>
            <ArrowPointerSvg
              color={globalStyles.WHITE_COLOR}
              direction="left"
              bold
            />
          </TouchableOpacity>
        )}
      </View>

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Hamburguer navigation={navigation} />
    </View>
  );
};
const Hamburguer = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.hamburguer}
      onPress={() => {
        navigation.openDrawer();
      }}>
      <HamburguerSvg color={globalStyles.WHITE_COLOR} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: 45,
    minHeight: 45,
    top: 0,
    zIndex: 100,
  },
  back: {
    flex: 1,
    height: 45,
    maxWidth: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOpacityBack: {
    flex: 1,
  },
  title: {
    marginTop: '2%',
    color: globalStyles.WHITE_COLOR,
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
    opacity: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  hamburguer: {
    flex: 1,
    maxWidth: 90,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
