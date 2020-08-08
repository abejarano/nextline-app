import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import ChangePlanSvg from '../assets/svg/ChangePlan';
import FacturacionSvg from '../assets/svg/Facturacion';
import CustomerServiceSvg from '../assets/svg/CustomerService';
import CloseSvg from '../assets/svg/Close';
import LogoutSvg from '../assets/svg/Logout';
import {} from 'react-native-gesture-handler';
import globalStyles from '../styles';
import {scale} from '../utils';
import {useDispatch} from 'react-redux';
import {signout} from '../actions/auth';

const items = [
  {
    label: 'CAMBIO DE PLAN',
    icon: <ChangePlanSvg scale={scale(18) / 24} />,
  },
  {
    label: 'FACTURACIÓN',
    icon: <FacturacionSvg scale={scale(18) / 24} />,
  },
  {
    label: 'ASISTENCIA TÉCNICA',
    icon: <CustomerServiceSvg scale={scale(18) / 24} />,
  },
];

const Sidebar = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <CloseSvg style={styles.close} />
      <Image
        style={styles.logo}
        source={require('../assets/images/LogoMenu.png')}
      />
      {items.map((item) => (
        <MenuItem item={item} key={item.label} />
      ))}

      <TouchableOpacity
        style={styles.logoutContainer}
        onPress={() => {
          dispatch(signout());
        }}>
        <Text style={styles.label}>CERRAR SESIÓN</Text>
        <LogoutSvg />
      </TouchableOpacity>
    </View>
  );
};

const MenuItem = ({item, style}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.itemTouch}>
        {item.icon}
        <Text style={[styles.label, styles.itemLabel]}>{item.label}</Text>
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
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingTop: 10,
    marginVertical: scale(9),
    ...globalStyles.SHADOW,
    elevation: 15,
  },
  itemTouch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemLabel: {
    marginVertical: 7,
  },
  label: {
    color: '#005FAB',
    fontSize: scale(18),
    textAlign: 'center',
  },
  logoutContainer: {
    flex: 1,
    maxHeight: 60,
    width: '90%',
    marginVertical: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    ...globalStyles.SHADOW,
  },
  close: {
    alignSelf: 'flex-end',
    marginVertical: 12.5,
    marginRight: 25,
  },
  logo: {
    width: 194,
    height: 62,
    marginBottom: 15,
  },
});

export default Sidebar;
