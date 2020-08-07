import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import InfoSvg from '../assets/svg/Info';
import globalStyles from '../styles';
import ArrowPointerSvg from '../assets/svg/ArrowPointer';
import HamburguerSvg from '../assets/svg/Hamburguer';

export const AuthHeader = ({navigation, onPress, title}) => {
  return (
    <View style={styles.view}>
      <View style={styles.back}>
        <Pressable
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
        </Pressable>
      </View>

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Pressable
        style={styles.hamburguer}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <HamburguerSvg color={globalStyles.WHITE_COLOR} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: globalStyles.PRIMARY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: 55,
  },
  back: {
    flex: 1,
    height: 45,
    maxWidth: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableBack: {
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
