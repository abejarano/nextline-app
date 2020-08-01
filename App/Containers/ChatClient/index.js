import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import database from '@react-native-firebase/database';
import {
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import globalStyles from '../../styles';

const screenSizeWidth = Dimensions.get('screen').width;

const ChatScreen = ({route, navigation}) => {
  const [message, setMessage] = useState('');
  const [isEditable, setIsEditable] = useState(true);
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState({id:2});
  const [userMode, setUserMode] = useState('');
  const {ticketId} = route.params;
  const dbRef = database().ref(`chatsCollections/${ticketId}`);

  useEffect(() => {
    listenerFirebase();
  }, []);

  const listenerFirebase = () => {
    console.log('0 listenerFirebase');
    const dbRef2 = database().ref(`chatsCollections/${ticketId}`);

    dbRef2.on('value', (dataSnapshot) => {
      console.log('1 listenerFirebase');
      let messages = [];

      dataSnapshot.forEach((child) => {
      console.log('3 listenerFirebase');

      console.log('_ key: ', child.key);
        console.log('_ val() chats', child.val().message);
        messages.push({
          id: child.key,
          customId: child.val().customId,
          dateMessage: child.val().dateMessage,
          typeMessage: child.val().typeMessage,
          message: child.val().message,
        });
      });

      setChats(messages.reverse());
    });
  };

  const saveMessage = (message, typeMessage = 'text') => {
    let msg = message;
    setMessage('');
    setIsEditable(false);

    console.log('saveMessage', message, typeMessage);

    dbRef
      .push({
        customId: '2',
        dateMessage: new Date(),
        typeMessage,
        message: msg,
      })
      .then((data) => {
        setIsEditable(true);
        updateVisualizations();
      })
      .catch((error) => {
        console.log('error ', error);
      });
  };

  const updateVisualizations = () => {
    dbRef = database().ref(`chatsCollections/${ticketId}/visualizations`).set({
      client: 99,
      admin: 99,
    });
  };

  const myRenderItem = ({item, index}) => {
    // return(
    //   <View>
    //     <Text>{user.id}</Text>
    //     <Text>{item.message}</Text>
    //   </View> 
    // )
    // if (item.customId == user.id) {
    //   return (
    //     <View style={{}}>
    //       <Text style={styles.textItemRight}>@ {item.message} {item.customId} {user.id}</Text>
    //     </View>
    //   );
    // } else {
    //   return (
    //     <View style={{}}>
    //       <Text style={styles.textItemRight}>! {item.message} {item.customId} {user.id}</Text>
    //     </View>
    //   );
    // }
    if (item.customId == user.id) {
      return (
        <View style={styles.viewWrapItemRight}>
          <Text style={styles.textItemRight}>@ {item.message}</Text>
        </View>
      );
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {(chats[index - 1] && chats[index - 1].customId === user.id) ||
          index === 0 ? (
            <Image style={styles.avatarItemLeft} source={{uri: item.avatar}} />
          ) : (
            <View style={{width: 30, height: 30, marginLeft: 10}} />
          )}
          <View style={styles.viewWrapItemLeft}>
            <Text style={styles.textItemLeft}>{item.message}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <>
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardContainer}
          keyboardVerticalOffset={8}>
          <View style={styles.viewContainer}>
            <FlatList
              inverted={true}
              data={chats}
              renderItem={myRenderItem}
              keyExtractor={(item) => (item.id.toString() + Math.random()) }
              contentContainerStyle={{paddingTop: 10, paddingBottom: 10}}
            />

            <View style={styles.viewWrapInput}>
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.viewTextInput}
                placeholder="Escribe tu mensaje..."
                onChangeText={(text) => setMessage(text)}
                value={message}
                multiline={true}
                editable={isEditable}
              />

              <TouchableOpacity onPress={() => saveMessage(message, 'text')}>
                <Image
                  source={require('../../assets/images/send_plane.png')}
                  style={styles.icSend}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  keyboardContainer: {
    padding: 0,
    width: '100%',
  },
  viewContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-start',
  },
  viewWrapInput: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
  viewTextInput: {
    flex: 1,
  },
  icSend: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
  viewWrapItemRight: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 6,
    marginTop: 6,
  },
  textItemRight: {
    borderRadius: 10,
    width: 170,
    backgroundColor: globalStyles.LIGTH_BLUE_COLOR,
    color: 'black',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden',
  },
  viewWrapItemLeft: {
    marginLeft: 10,
    marginBottom: 6,
    marginTop: 6,
  },
  textItemLeft: {
    borderRadius: 10,
    width: 170,
    backgroundColor: globalStyles.GRAY_COLOR,
    color: 'black',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden',
  },
  avatarItemLeft: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
  },
});
