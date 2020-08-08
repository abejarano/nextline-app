import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import globalStyles from '../../styles';
import {scale} from '../../utils';

export const FacturaStatus = ({}) => {
  return (
    <View style={styles.view}>
      <View style={styles.child}>
        <Text style={styles.label}>fecha de pago</Text>
        <Text style={styles.date}>04/09/2020</Text>
      </View>
      <View style={styles.sep} />
      <View style={styles.child}>
        <Text style={styles.label}>fecha de pago</Text>
        <Text style={styles.usd}>20$</Text>
        <Text style={styles.bs}>Bs 20.000.00</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: scale(91),
    maxHeight: scale(100),
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '90%',
    ...globalStyles.SHADOW,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  child: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    marginTop: scale(10),
    textTransform: 'uppercase',
    fontFamily: globalStyles.POPPINS_REGULAR,
    fontSize: scale(10),
  },
  sep: {
    marginHorizontal: 15,
    alignSelf: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: globalStyles.PRIMARY_COLOR_DARK,
    height: '80%',
  },
  usd: {
    marginTop: 'auto',
    fontFamily: globalStyles.POPPINS_BOLD,
    fontSize: scale(25),
    color: globalStyles.PRIMARY_COLOR_DARK,
  },
  bs: {
    fontFamily: globalStyles.POPPINS_BOLD,
    fontSize: scale(14),
    color: globalStyles.PRIMARY_COLOR_DARK,
  },
  date: {
    marginBottom: 'auto',
    marginTop: 'auto',
    fontFamily: globalStyles.POPPINS_REGULAR,
    fontSize: scale(18),
    color: globalStyles.PRIMARY_COLOR_DARK,
  },
});
