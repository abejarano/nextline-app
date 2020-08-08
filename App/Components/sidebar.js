import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import ChangePlanSvg from '../assets/svg/ChangePlan';
import FacturacionSvg from '../assets/svg/Facturacion';
import CustomerServiceSvg from '../assets/svg/CustomerService';
import CloseSvg from '../assets/svg/Close';
import LogoutSvg from '../assets/svg/Logout';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from '../styles';
import {scale} from '../utils';
import {useDispatch} from 'react-redux';
import {signout} from '../actions/auth';

const items = [
  {
    label: 'CAMBIO DE PLAN',
    icon: <ChangePlanSvg />,
  },
  {
    label: 'FACTURACIÓN',
    icon: <FacturacionSvg />,
  },
  {
    label: 'ASISTENCIA TÉCNICA',
    icon: <CustomerServiceSvg />,
  },
];

const Sidebar = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/LogoMenu.png')}
      />
      {items.map((item) => (
        <MenuItem item={item} key={item.label} />
      ))}

      <View style={styles.logout}>
        <TouchableOpacity
          style={styles.logoutContainer}
          onPress={() => {
            dispatch(signout());
          }}>
          <Text style={styles.label}>CERRAR SESIÓN</Text>
          <LogoutSvg />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MenuItem = ({item, style}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.itemTouch}>
        {item.icon}
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    maxHeight: 120,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    ...globalStyles.SHADOW,
  },
  itemTouch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#005FAB',
    fontSize: scale(18),
    textAlign: 'center',
  },
  logout: {
    flex: 1,
    width: '90%',
    maxHeight: 60,
    justifyContent: 'center',
  },
  logoutContainer: {
    marginVertical: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    ...globalStyles.SHADOW,
  },
  logo: {
    width: 194,
    height: 62,
    marginVertical: 15,
  },
});

export default Sidebar;
