import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SolidLogin from '../../assets/svg/SolidLogo';
import globalStyles from '../../styles';
import {scale, verticalScale} from '../../utils';

export const CentralHomeButton = ({plan}) => {
  return (
    <View style={styles.gradientContainer}>
      <LinearGradient
        colors={[
          globalStyles.LIGTH_BLUE_COLOR,
          globalStyles.PRIMARY_COLOR,
          globalStyles.PRIMARY_COLOR_DARK,
        ]}
        angle={180}
        style={styles.linearGradient}>
        <View style={styles.whiteCircle}>
          <SolidLogin
            scale={0.35}
            style={styles.logo}
            color={globalStyles.GRAY_COLOR + '80'}
          />
          <Text style={styles.buttonText}>
            {plan?.plan.split(' ').join('')}
          </Text>
          <Text style={styles.buttonLowerText}>PLAN</Text>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  gradientContainer: {
    width: verticalScale(200),
    height: verticalScale(200),
    marginBottom: '3%',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 240,
    ...globalStyles.SHADOW,
  },
  buttonText: {
    fontSize: verticalScale(33),
    textAlign: 'center',
    fontFamily: globalStyles.POPPINS_SEMIBOLD,
    color: globalStyles.WHITE_COLOR,
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
  },
  logo: {},
  whiteCircle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 240,
    borderColor: globalStyles.WHITE_COLOR,
    borderWidth: 15,
    padding: verticalScale(7),
    // ...globalStyles.DEBUG,
  },
  buttonLowerText: {
    fontSize: verticalScale(12),
    textAlign: 'center',
    color: globalStyles.WHITE_COLOR,
    textTransform: 'uppercase',
    fontFamily: globalStyles.POPPINS_SEMIBOLD,
  },
});
