import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import globalStyles from '../../styles';
import {scale, verticalScale} from '../../utils';

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
    minHeight: 90,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '90%',
    ...globalStyles.SHADOW,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: verticalScale(25),
    // alignSelf: 'flex-end',
    marginTop: 'auto',
  },
  child: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // ...globalStyles.DEBUG,
  },
  label: {
    marginTop: scale(2),
    textTransform: 'uppercase',
    fontFamily: globalStyles.POPPINS_REGULAR,
    fontSize: scale(10),
    // ...globalStyles.DEBUG,
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
    marginBottom: 'auto',
    fontFamily: globalStyles.POPPINS_BOLD,
    fontSize: scale(25),
    color: globalStyles.PRIMARY_COLOR_DARK,
    textAlignVertical: 'bottom',
    textAlign: 'center',
    marginTop: scale(5),
    // ...globalStyles.DEBUG,
  },
  bs: {
    fontFamily: globalStyles.POPPINS_BOLD,
    fontSize: scale(14),
    color: globalStyles.PRIMARY_COLOR_DARK,
    // ...globalStyles.DEBUG,
  },
  date: {
    marginBottom: 'auto',
    marginTop: 'auto',
    fontFamily: globalStyles.POPPINS_REGULAR,
    fontSize: scale(18),
    color: globalStyles.PRIMARY_COLOR_DARK,
  },
});
