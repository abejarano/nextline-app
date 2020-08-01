import React, { useState } from 'react';
import {StyleSheet, Dimensions, View, Text, Image} from 'react-native';
import database from '@react-native-firebase/database';
import { TextInput, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenSizeWidth = Dimensions.get('screen').width;

const ChatScreen = ({ route, navigation }) => {
  const [ message, setMessage ] = useState('');
  const { ticketId } = route.params;
  const chats = [];
  const currentEmail = '';
  const currentMessage = '';
  
  // console.warn(ticketId);

  const listenerFirebase = (dbRef) => {
    console.log('listenerFirebase');
    dbRef.on('value', (dataSnapshot) => {
      var feedbacks = [];

      dataSnapshot.forEach((child) => {
        feedbacks.push({
          // mensagem: child.val().feedback.mensagem,
          key: child.key,
        });
      });
      
      console.log('data', feedbacks.reverse() )
    });
  }

  const saveMessage = (message) => {
    console.log('saveMessage', message);
    let feedback = {
      customId: new Date() + 'asd',
      message,
    };
    const dbRef = database().ref(`chatsCollections/${ticketId}`);

    dbRef
      .push({
        feedback,
        message,
      })
      .then((data) => {
        setMessage('');
        updateVisualizations();
      })
      .catch((error) => {
        console.log('error ', error);
      });
  };

  const updateVisualizations = () => {
    dbRef = database()
      .ref(`chatsCollections/${ticketId}/visualizations`)
      .set({
        client: 99,
        admin: 99,
      });
  };

  const dbRef = database().ref(`chatsCollections${ticketId}`);
  listenerFirebase(dbRef);

  

  const sendMessage = (message) => {

    console.warn('_ send _ message _ ', message);
    saveMessage(message);
  }; 

  const myRenderItem = ({ item, index }) => {
    
    if (item.sender === currentEmail) {
      return (
        <View style={styles.viewWrapItemRight}>
          <Text style={styles.textItemRight}>{item.content}</Text>
        </View>
      )
    } else {
      
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {(chats[index - 1] &&
            chats[index - 1].sender === currentEmail) ||
            index === 0 ? (
              <Image
                style={styles.avatarItemLeft}
                source={{ uri: item.avatar }}
              />
            ) : (
              <View style={{ width: 30, height: 30, marginLeft: 10 }} />
            )}
          <View style={styles.viewWrapItemLeft}>
            <Text style={styles.textItemLeft}>{item.content}</Text>
          </View>
        </View>
      )
    }
  };

  return(
    <>
      <SafeAreaView>
          <View style={styles.viewContainer}>
            <FlatList
              inverted={true}
              style={styles.viewContainer}
              data={chats}
              renderItem={ myRenderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
            />

            <View style={styles.viewWrapInput}>
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.viewTextInput}
                placeholder="Type your message..."
                onChangeText={text => setMessage(text)}
                value={message}
              />

              <TouchableOpacity onPress={ () => sendMessage(message)}>
                <Image source={require('../../assets/images/send_plane.png')} style={styles.icSend} />
              </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
    </>
  );
}
// 

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  viewContainer: {
    flex: 1
  },
  viewWrapInput: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10
  },
  viewTextInput: {
    flex: 1,
  },
  icSend: {
    width: 35,
    height: 35,
    marginLeft: 10
  },
  viewWrapItemRight: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 6,
    marginTop: 6
  },
  textItemRight: {
    borderRadius: 10,
    width: 170,
    backgroundColor: 'white',
    color: 'black',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },
  viewWrapItemLeft: {
    marginLeft: 10,
    marginBottom: 6,
    marginTop: 6,
  },
  textItemLeft: {
    borderRadius: 10,
    width: 170,
    backgroundColor: '#203152',
    color: 'white',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },
  avatarItemLeft: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10
  }
});
