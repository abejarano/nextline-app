import React, { Component } from 'react';
import { StyleSheet, Dimensions,  View,  Text, Button, } from 'react-native';
import database from '@react-native-firebase/database';

const screenSizeWidth = Dimensions.get('screen').width;

class LoginClient extends Component {
    constructor(){
        super();
        this.state = {
           
        }
    }

     
     

    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>Login!</Text>
               <Button
                    title="Go Home"
                    onPress={() => this.props.navigation.push('HomeUser')}
                /> 
            </View>
        )
    }
}

export default LoginClient;

const styles = StyleSheet.create({
    container: {
      marginTop: 20
    },
});