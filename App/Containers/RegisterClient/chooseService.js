import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Title} from '../../Components/title';
import {Header} from '../../Components/header';
import globalStyles from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {servicioFetch} from '../../actions/servicio';

const Service = ({id, servicio, activo}) => {
  console.log(servicio, id, activo);
  return (
    <View style={styles.serviceView}>
      <Text style={styles.serviceText}>{servicio}</Text>
      <TouchableOpacity style={styles.serviceButton}>
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
      <Header navigation={navigation} />
      <Title text={'Selecciona        un Servicio'} />
      {services.map((service) => (
        <Service key={`serv-sign-${service.id}`} {...service} />
      ))}
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
