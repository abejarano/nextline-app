import React, {useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {servicioStatusFetch} from '../../actions/servicio';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../styles';
import SolidLogin from '../../assets/svg/SolidLogo';
import {SpeedGroup} from '../../Components/speedGroup';
import {Avatar} from '../../Components/avatar';
import {Header} from '../../Components/header';

const HomeClientScreen = () => {
  const dispatch = useDispatch();
  const status = useSelector(
    (state) => state.servicio.status.data.solicitud_servicio,
  );
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  useEffect(() => {
    dispatch(servicioStatusFetch());
  }, [dispatch]);
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/home.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <Header backVisible={false} />
        <View style={styles.userContainer}>
          <Avatar />
          <View style={styles.usernameContainer}>
            <Text style={styles.usernameLabel}>Usuario</Text>
            <Text style={styles.usernameText}>
              {user && user.nombre_razsoc}
            </Text>
          </View>
        </View>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.serviceLabel}>tipo de servicio</Text>
        <Text style={styles.serviceText}>Residencial @</Text>
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
          <Text style={styles.statusText}>{status && status.status}</Text>
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
    marginBottom: 20,
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
  serviceLabel: {
    fontSize: 10,
    opacity: 1,
    color: globalStyles.LIGTH_BLUE_COLOR,
    textTransform: 'uppercase',
  },
  serviceText: {
    fontSize: 25,
    color: globalStyles.WHITE_COLOR,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  statusLabel: {
    fontSize: 10,
    color: globalStyles.GRAY_TEXT_COLOR,
    textTransform: 'uppercase',
    marginTop: '10%',
  },
  statusText: {
    color: globalStyles.PRIMARY_COLOR,
    textTransform: 'uppercase',
  },
  statusContainer: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: globalStyles.GRAY_TEXT_COLOR + '15',
    height: 36,
    alignItems: 'center',
    borderRadius: 18,
  },
  redCircle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: globalStyles.RED_COLOR,
  },
  userContainer: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: -20,
    marginBottom: 20,
  },
  usernameContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
  },
  usernameLabel: {
    fontSize: 10,
    opacity: 1,
    color: globalStyles.LIGTH_BLUE_COLOR,
    textTransform: 'uppercase',
  },
  usernameText: {
    fontSize: 20,
    color: globalStyles.WHITE_COLOR,
    textTransform: 'capitalize',
  },
});

export default HomeClientScreen;
