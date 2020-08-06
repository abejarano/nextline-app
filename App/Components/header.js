import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import InfoSvg from '../assets/svg/Info';
import globalStyles from '../styles';
import ArrowPointerSvg from '../assets/svg/ArrowPointer';

export const Header = ({navigation, backVisible = true, onPress}) => {
  return (
    <View style={styles.view}>
      {backVisible && (
        <View style={styles.back}>
          <Pressable
            style={styles.pressable}
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
      )}
      <Pressable style={styles.info}>
        <InfoSvg color={globalStyles.WHITE_COLOR} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    maxHeight: 35,
  },
  pressable: {},
  info: {
    height: 33,
    padding: 5,
  },
  back: {
    padding: 10,
    height: 45,
    display: 'flex',
    width: '39%',
    marginRight: 'auto',
  },
});
