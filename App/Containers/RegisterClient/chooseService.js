import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {servicioFetch, servicioSelect} from '../../actions/servicio';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyledStatusBar} from '../../Components/statusBar';
import SolidLogo from '../../assets/svg/SolidLogo';
import {scale} from '../../utils';

const Service = ({id, servicio, activo, index, navigation}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.serviceView}
      onPress={() => {
        dispatch(servicioSelect({id, servicio, activo, index}));
        navigation.push('PlanSelect');
      }}>
      <Text style={styles.serviceText}>{servicio}</Text>
      <View
        style={{
          ...styles.serviceButton,
          backgroundColor:
            globalStyles[
              globalStyles.LIST_COLORS[index % globalStyles.LIST_COLORS.length]
            ],
        }}>
        {/* <Text style={styles.plus}>+</Text> */}
        <SolidLogo icon color={globalStyles.WHITE_COLOR} style={styles.logo} />
      </View>
    </TouchableOpacity>
  );
};

export const ChooseService = ({navigation}) => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.servicio.data);
  const loading = useSelector((state) => state.servicio.fetching);

  useEffect(() => {
    dispatch(servicioFetch());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/auth.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <View style={styles.view}>
          <StyledStatusBar />
          <Header
            navigation={navigation}
            onPress={() => {
              console.log('go back');
              navigation.goBack();
              dispatch(servicioSelect(null));
            }}
          />
          <Title text={'Selecciona\nun Servicio'} />
          {loading ? (
            <ActivityIndicator size="large" color={globalStyles.WHITE_COLOR} />
          ) : (
            <View style={styles.scroll}>
              <FlatList
                data={services}
                renderItem={({item, index}) => (
                  <Service {...item} index={index} navigation={navigation} />
                )}
                keyExtractor={(service) => `serv-sign-${service.id}`}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: globalStyles.PRIMARY_COLOR_DARK,
  },
  view: {
    flex: 1,
    // display: 'flex',
    // justifyContent: 'center',
  },
  serviceText: {
    color: globalStyles.PRIMARY_COLOR,
    fontSize: scale(24),
    fontFamily: globalStyles.TREBUCHET_FONT,
    marginLeft: '1%',
  },
  logo: {
    // height: 10,
    // ...globalStyles.DEBUG,
  },
  serviceButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 50,
    width: 50,
    backgroundColor: globalStyles.MUSTARD_COLOR,
  },
  serviceView: {
    display: 'flex',
    backgroundColor: globalStyles.GRAY_COLOR,
    margin: '5%',
    padding: '5%',
    borderRadius: 15,
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '10%',
  },
  scroll: {},
});
