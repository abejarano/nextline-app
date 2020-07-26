import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class LoginClient extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Login Client!</Text>
        <Button
          title="Register"
          onPress={() => this.props.navigation.push('Register')}
        />
      </View>
    );
  }
}

export default LoginClient; 