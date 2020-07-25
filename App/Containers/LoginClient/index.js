import React, { Component } from 'react';
import { StyleSheet, Dimensions,  View,  Text, Button, } from 'react-native';
import database from '@react-native-firebase/database';

const screenSizeWidth = Dimensions.get('screen').width;

class LoginClient extends Component {
    constructor(){
        super();
        this.state = {
          fotos: []
        }
    }

    componentDidMount() {
        let dbRef = database().ref(`testCollection`)
        this.listenerFirebase(dbRef)
    }

    listenerFirebase(dbRef) {
        console.log('listenerFirebase');
        dbRef.on("value", dataSnapshot => {
            var feedbacks = []

            dataSnapshot.forEach(child => {
                feedbacks.push({
                    mensagem: child.val().feedback.mensagem,
                    key: child.key
                });
            });

            this.setState({
                data: feedbacks.reverse()
            });
        });
    }

    post_firebase = () => {
        console.log('post_firebase');
        let feedback = {
            mensagem: this.state.mensagem_feedback,
        }
        let dbRef = database().ref(`usuario_id/${this.state.userid}`)

        dbRef.push({
            feedback
        }).then((data) => {
            this.setState({ mensagem_feedback: "" })
            //success callback
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }

    testFirebase(){
        console.warn('test fire');
        database()
        .ref('/users/123')
        .set({
            name: 'Ada Lovelace',
            age: 31,
        })
        .then(() => console.log('Data set.')).catch(e=> console.warn(e));
    }

    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>Login!</Text>
               <Button
                    title="Go Home"
                    onPress={() => this.props.navigation.push('HomeUser')}
                />
               <Button
                    title="test fire"
                    onPress={() => this.post_firebase()}
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