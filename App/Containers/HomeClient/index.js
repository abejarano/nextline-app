import React, {useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {servicioFetch} from '../../actions/servicio';
import {loadProfile} from '../../actions/profile';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../styles';
import SolidLogin from '../../assets/svg/SolidLogo';
import {SpeedGroup} from '../../Components/speedGroup';
import {TextInput} from 'react-native-gesture-handler';
import {Avatar} from '../../Components/avatar';

const HomeClientScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(servicioFetch());
    dispatch(loadProfile());
  }, [dispatch]);
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/home.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <Avatar />
        <StatusBar barStyle="dark-content" />
        <Text style={styles.serviceLabel}>Eservice de solicitud</Text>
        <Text style={styles.serviceText}>service</Text>
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
                width={80}
                height={80}
                style={styles.logo}
                color={globalStyles.GRAY_COLOR + '80'}
              />
              <Text style={styles.buttonText}>10MB</Text>
              <Text style={styles.buttonLowerText}>PLAN</Text>
            </View>
          </LinearGradient>
        </View>
        <SpeedGroup />
        <Text style={styles.statusLabel}>Estatus de solicitud</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Status</Text>
          <View style={styles.redCircle} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    width: 240,
    height: 240,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,

    borderRadius: 240,
    shadowColor: globalStyles.PRIMARY_COLOR_DARK + '33',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  buttonText: {
    fontSize: 44,
    textAlign: 'center',
    fontWeight: 'bold',
    color: globalStyles.WHITE_COLOR,
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
  },
  logo: {
    marginTop: 10,
    marginBottom: -30,
  },
  whiteCircle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 240,
    borderColor: globalStyles.WHITE_COLOR,
    borderWidth: 15,
  },
  buttonLowerText: {
    fontSize: 12,
    textAlign: 'center',
    color: globalStyles.WHITE_COLOR,
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default HomeClientScreen;
