import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollViewComponent,
} from 'react-native';
import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {servicioFetch, servicioSelect} from '../../actions/servicio';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const Service = ({id, servicio, activo, index, navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.serviceView}>
      <Text style={styles.serviceText}>{servicio}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(servicioSelect(id));
          navigation.push('PlanSelect');
        }}
        style={{
          ...styles.serviceButton,
          backgroundColor:
            globalStyles[
              globalStyles.LIST_COLORS[index % globalStyles.LIST_COLORS.length]
            ],
        }}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export const ChooseService = ({navigation}) => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.servicio.data);

  useEffect(() => {
    dispatch(servicioFetch());
  }, [dispatch]);

  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/auth.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <Header navigation={navigation} />
        <Title text={'Selecciona        un Servicio'} />
        <SafeAreaView style={styles.scroll}>
          <FlatList
            data={services}
            renderItem={({item, index}) => (
              <Service {...item} index={index} navigation={navigation} />
            )}
            keyExtractor={(service) => `serv-sign-${service.id}`}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: globalStyles.BACKGROUND_BOTOM,
    flex: 1,
    alignItems: 'center',
  },
  serviceText: {
    color: globalStyles.PRIMARY_COLOR,
    fontSize: 25,
    marginLeft: 5,
  },
  plus: {
    color: globalStyles.WHITE_COLOR,
    fontSize: 50,
    textAlignVertical: 'center',
    fontWeight: '100',
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
    margin: 15,
    padding: 15,
    borderRadius: 15,
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '10%',
  },
  scroll: {
    width: '90%',
    flex: 1,
    // paddingLeft: '10%',
  },
});
