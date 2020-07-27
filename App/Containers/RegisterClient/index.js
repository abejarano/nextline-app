import React, {Component} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export function RegisterScreen() {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Register Client!</Text>
        <Button
          title="Register"
          onPress={() => this.props.navigation.push('Register')}
        />
      </View>
    </>
  );
}
