import React, {useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {servicioStatusFetch, contratoStatusFetch} from '../../actions/servicio';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../styles';
import SolidLogin from '../../assets/svg/SolidLogo';
import {SpeedGroup} from '../../Components/speedGroup';
import {Avatar} from '../../Components/avatar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale, verticalScale} from '../../utils';
import {FacturaStatus} from './facturaStatus';
import {StatusService} from './statusService';
import {AuthHeader} from '../../Components/authHeader';
import {ScrollView} from 'react-native';

const HomeClientScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const status = useSelector(
    (state) => state.servicio.status.data.solicitud_servicio,
  );
  const user = useSelector((state) => state.auth.user);
  const plan = useSelector((state) => state.plans.selected);
  const service = useSelector((state) => state.servicio.selected);
  const isClient = useSelector((state) => state.auth.isClient);
  useEffect(() => {
    if (isClient) {
      dispatch(contratoStatusFetch());
    } else {
      dispatch(servicioStatusFetch());
    }
  }, [dispatch, isClient]);
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/home.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <View style={styles.view}>
          <AuthHeader navigation={navigation} title={''} backVisible={false} />
          <ScrollView style={styles.scrollView}>
            <View style={styles.view}>
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
              <Text style={styles.serviceText}>{service.servicio}</Text>
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
              <SpeedGroup
                upSpeed={plan.velocidad_subida}
                downSpeed={plan.velocidad_baja}
              />
              {isClient ? <FacturaStatus /> : <StatusService status={status} />}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    marginBottom: '3%',
  },
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
    fontSize: scale(33),
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
    justifyContent: 'space-between',
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
    fontSize: 12,
    textAlign: 'center',
    color: globalStyles.WHITE_COLOR,
    textTransform: 'uppercase',
    fontFamily: globalStyles.POPPINS_SEMIBOLD,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  serviceLabel: {
    fontSize: scale(10),
    fontFamily: globalStyles.TREBUCHET_FONT,
    opacity: 1,
    color: globalStyles.LIGTH_BLUE_COLOR,
    textTransform: 'uppercase',
  },
  serviceText: {
    fontSize: scale(25),
    fontFamily: globalStyles.POPPINS_REGULAR,
    color: globalStyles.WHITE_COLOR,
    textTransform: 'uppercase',
    marginBottom: '3%',
  },
  statusLabel: {
    fontSize: scale(10),
    fontFamily: globalStyles.TREBUCHET_FONT,
    color: globalStyles.GRAY_TEXT_COLOR,
    textTransform: 'uppercase',
    marginTop: 'auto',
  },
  statusText: {
    fontSize: scale(16),
    fontFamily: globalStyles.POPPINS_REGULAR,
    color: globalStyles.PRIMARY_COLOR,
    textTransform: 'uppercase',
  },
  statusContainer: {
    flex: 1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: globalStyles.GRAY_TEXT_COLOR + '15',
    minHeight: 24,
    maxHeight: 36,
    alignItems: 'center',
    borderRadius: 60,
    marginBottom: 'auto',
  },
  redCircle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: globalStyles.RED_COLOR,
  },
  userContainer: {
    flex: 1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: '3%',
    maxHeight: 100,
    minHeight: 75,
  },
  usernameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  usernameLabel: {
    fontSize: scale(10),
    fontFamily: globalStyles.TREBUCHET_FONT,
    opacity: 1,
    color: globalStyles.LIGTH_BLUE_COLOR,
    textTransform: 'uppercase',
  },
  usernameText: {
    fontSize: scale(20),
    fontFamily: globalStyles.SEGOE_FONT,
    color: globalStyles.WHITE_COLOR,
    textTransform: 'capitalize',
  },
});

export default HomeClientScreen;
