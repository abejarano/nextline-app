import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export function RegisterScreen() {
  return (
    <View style={styles.view}>
      <Text>Register Client!</Text>
      <TextInput>Nombre o razon social</TextInput>
      <TextInput>clave</TextInput>
      <TextInput>Email</TextInput>
      <TextInput>clave</TextInput>
      <Button
        title="Register"
        onPress={() => this.props.navigation.push('Register')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
