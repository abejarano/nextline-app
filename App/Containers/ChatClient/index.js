import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Text, Button} from 'react-native';
import database from '@react-native-firebase/database';

const screenSizeWidth = Dimensions.get('screen').width;

class ChatClient extends Component {
  constructor() {
    super();
    this.state = {
      chats: [],
      data: null,
      chatId: 989,
    };
  }

  componentDidMount() {
    let dbRef = database().ref(`chatsCollections${this.state.chatId}`);
    this.listenerFirebase(dbRef);
  }

  listenerFirebase(dbRef) {
    console.log('listenerFirebase');
    dbRef.on('value', (dataSnapshot) => {
      var feedbacks = [];

      dataSnapshot.forEach((child) => {
        feedbacks.push({
          // mensagem: child.val().feedback.mensagem,
          key: child.key,
        });
      });

      this.setState({
        data: feedbacks.reverse(),
      });
    });
  }

  insertChar = () => {
    console.log('insertChar');
    let feedback = {
      customId: new Date() + 'asd',
      mensagem: this.state.mensagem_feedback,
    };
    const dbRef = database().ref(`chatsCollections/${this.state.chatId}`);

    dbRef
      .push({
        feedback,
        otherData: 'ok baby',
      })
      .then((data) => {
        this.setState({mensagem_feedback: 'hola oki'});
        console.log('data ', data);
        this.updateVisualizations();
      })
      .catch((error) => {
        console.log('error ', error);
      });
  };

  updateVisualizations = () => {
    console.warn('updateVisualizations');
    dbRef = database()
      .ref(`chatsCollections/${this.state.chatId}/visualizations`)
      .set({
        client: 0,
        admin: 0,
      });
  };

  testFirebase() {
    console.warn('test fire');
    database()
      .ref('/users/123')
      .set({
        name: 'Ada Lovelace',
        age: 31,
      })
      .then(() => console.log('Data set.'))
      .catch((e) => console.warn(e));
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Chats !</Text>
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.push('HomeUser')}
        />
        <Button title="test fire" onPress={() => this.insertChar()} />
      </View>
    );
  }
}

export default ChatClient;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
