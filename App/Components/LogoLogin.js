import React from 'react';
import { Image, Platform} from 'react-native';

export const LogoLogin = () => {
	console.log('Platform', Platform.OS);
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
