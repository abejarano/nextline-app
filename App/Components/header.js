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
            style={styles.preesable}
            onPress={
              onPress
                ? onPress
                : () => {
                    navigation.goBack();
                  }
            }
          >
            <ArrowPointerSvg
              color={globalStyles.WHITE_COLOR}
              direction="left"
              bold
            />
          </Pressable>
        </View>
      )}
      <Pressable style={styles.info} >
        <InfoSvg color={globalStyles.WHITE_COLOR} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    marginTop: 15,
    marginBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  preesable: {
  },
  info: {
    alignSelf: 'flex-end',
    height: 33,
    marginLeft: 'auto',
    marginRight: '10%',
  },
  back: {
    padding: 10,
    height: 45,
    display: 'flex',
    width: '39%',
  },
});
