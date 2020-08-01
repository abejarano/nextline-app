import React, { useState } from 'react';
import {StyleSheet, Dimensions, View, Text, Image} from 'react-native';
import database from '@react-native-firebase/database';
import { TextInput, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const screenSizeWidth = Dimensions.get('screen').width;

const ChatScreen = ({ route, navigation }) => {
  const [ message, setMessage ] = useState('');
  const [ isEditable, setIsEditable ] = useState('');
  const { ticketId } = route.params;
  const dbRef = database().ref(`chatsCollections/${ticketId}`);

  let chats = [];
  const userId = '';
  const currentMessage = '';
  
  const listenerFirebase = () => {
    // const dbRef = database().ref(`chatsCollections${ticketId}`);
    console.log('listenerFirebase');
    dbRef.on('value', (dataSnapshot) => {
      let messages = [];

      dataSnapshot.forEach((child) => {
        console.log("_ val() chats", child.val().message)
        console.log("_ val() chats {}", child.val())
        messages.push({
          customId: child.val().customId,
          dateMessage: child.val().dateMessage,
          typeMessage: child.val().typeMessage,
          message: child.val().message,
        });
      });
      
      // console.log('data', messages.reverse() );
      chats = messages.reverse();
    });
  }

  const saveMessage = (message, typeMessage="text") => {
    isEditable = true;
    console.log('saveMessage', message, typeMessage);

    dbRef
      .push({
        customId: "2",
        dateMessage: new Date() + 'asd',
        typeMessage,
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

  listenerFirebase();

  const myRenderItem = ({ item, index }) => {
    
    if (item.customId === userId) {
      return (
        <View style={styles.viewWrapItemRight}>
          <Text style={styles.textItemRight}>{item.content}</Text>
        </View>
      )
    } else {
      
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {(chats[index - 1] &&
            chats[index - 1].customId === userId) ||
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
                onSubmitEditing={text => setMessage(text)}
                value={message}
                multiline={true}
                editable={isEditable}
              />

              <TouchableOpacity onPress={ () => saveMessage(message, 'text')}>
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
