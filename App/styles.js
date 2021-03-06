import {Platform} from 'react-native';

export default {
  PRIMARY_COLOR: '#0090DF',
  PRIMARY_COLOR_DARK: '#005FAB',
  GREEN_COLOR: '#52E0A0',
  LIGTH_BLUE_COLOR: '#52C0F2',
  MUSTARD_COLOR: '#FCD581',
  RED_COLOR: '#D52941',
  WHITE_COLOR: '#F5F5F5',
  BACKGROUND_BOTOM: '#0071bf',
  GRAY_COLOR: '#edf6fb',
  GRAY_TEXT_COLOR: '#464545',
  STATUS_BAR_COLOR: '#0070bd',
  LIST_COLORS: ['MUSTARD_COLOR', 'RED_COLOR', 'GREEN_COLOR'],
  BACKGROUNDIMAGE: {
    flex: 1,
    resizeMode: 'cover',
  },
  DEBUG: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 2,
  },
  // Fonts
  TREBUCHET_BOLD_FONT:
    Platform.OS === 'ios' ? 'TrebuchetMS-Bold' : 'trebuc-bold',
  TREBUCHET_FONT: Platform.OS === 'ios' ? 'TrebuchetMS' : 'trebuc',
  SEGOE_FONT: 'SegoeUI',
  DEBUG_FONT: 'GreatVibes',
  POPPINS_BOLD: 'Poppins-Bold',
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_MEDIUM: 'Poppins-Medium',
  POPPINS_REGULAR: 'Poppins-Regular',
  POPPINS_THIN: 'Poppins-Thin',
  POPPINS_SEMIBOLD: 'Poppins-SemiBold',

  //
  SHADOW: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
};
