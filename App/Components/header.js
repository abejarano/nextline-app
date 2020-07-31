import React from 'react';
import {StyleSheet, View} from 'react-native';
import InfoSvg from '../assets/svg/Info';
import globalStyles from '../styles';
import ArrowPointerSvg from '../assets/svg/ArrowPointer';

export const Header = ({navigation, backVisible = true}) => {
  return (
    <View style={styles.view}>
      {backVisible && (
        <ArrowPointerSvg
          color={globalStyles.WHITE_COLOR}
          direction="left"
          style={styles.back}
          bold
          onPress={() => {
            navigation.goBack();
          }}
        />
      )}
      <InfoSvg style={styles.info} color={globalStyles.WHITE_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    marginTop: 15,
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    alignSelf: 'flex-end',
    width: '50%',
    marginLeft: 'auto',
    marginRight: '10%',
  },
  back: {
    display: 'flex',
    width: '50%',
    justifyContent: 'flex-start',
    // marginRight: 'auto',
  },
});
