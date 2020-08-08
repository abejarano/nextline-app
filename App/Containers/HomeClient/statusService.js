import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
export const StatusService = ({status}) => {
  return (
    <>
      <Text style={styles.statusLabel}>Estatus de solicitud</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{status && status.status}</Text>
        <View style={styles.redCircle} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  view: {
    width: '100%',
  },
});
