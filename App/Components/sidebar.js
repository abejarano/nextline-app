import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ChangePlanSvg from '../assets/svg/ChangePlan';
import FacturacionSvg from '../assets/svg/Facturacion';
import CustomerServiceSvg from '../assets/svg/CustomerService';
import CloseSvg from '../assets/svg/Close';
import LogoutSvg from '../assets/svg/Logout';
import LogoMenu from '../assets/svg/LogoMenu';
import {TouchableHighlight} from 'react-native-gesture-handler';
import globalStyles from '../styles';
import {scale} from '../utils';

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
  return (
    <View style={styles.container}>
      <LogoMenu />
      {items.map((item) => (
        <MenuItem item={item} key={item.label} />
      ))}
      <TouchableHighlight style={styles.high}>
        <View style={styles.logout}>
          <Text style={styles.label}>CERRAR SESIÓN</Text>
          <LogoutSvg />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const MenuItem = ({item, style}) => {
  return (
    <TouchableHighlight style={styles.high}>
      <View style={styles.itemContainer}>
        {item.icon}
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  high: {
    width: '100%',
    ...globalStyles.DEBUG,
    borderRadius: 25,
    // shadowColor: '#005FAB33',
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowRadius: 15,
    // elevation: 10,
  },
  itemContainer: {
    width: '100%',
    padding: '5%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  label: {
    color: '#005FAB',
    fontSize: scale(18),
    width: '100%',
    textAlign: 'center',
  },
  logout: {
    flexDirection: 'row',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Sidebar;
