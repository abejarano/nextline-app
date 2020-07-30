import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const LogoLogin = () => {
  return (
    <Image
      source={require('../assets/images/logoClip.png')}
      x="0"
      y="0"
      style={styles.image}
      preserveAspectRatio="xMidYMid slice"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: '45%',
    width: '60%',
  },
});
