import React from 'react';
import {Image} from 'react-native';

export const LogoLogin = () => {
  return (
    <Image
      source={require('../assets/images/logoClip.png')}
      x="0"
      y="0"
      width="100%"
      height="55%"
      preserveAspectRatio="xMidYMid slice"
    />
  );
};
