import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Text, Button, Image} from 'react-native';
import database from '@react-native-firebase/database';
import { TextInput, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenSizeWidth = Dimensions.get('screen').width;

// class ChatScreen extends Component {
//   constructor() {
//     super();
//     this.state = {
//       chats: [],
//       data: null,
//       chatId: 989,
//     };
//   }

//   componentDidMount() {
//     let dbRef = database().ref(`chatsCollections${this.state.chatId}`);
//     this.listenerFirebase(dbRef);
//   }

//   listenerFirebase(dbRef) {
//     console.log('listenerFirebase');
//     dbRef.on('value', (dataSnapshot) => {
//       var feedbacks = [];

//       dataSnapshot.forEach((child) => {
//         feedbacks.push({
//           // mensagem: child.val().feedback.mensagem,
//           key: child.key,
//         });
//       });

//       this.setState({
//         data: feedbacks.reverse(),
//       });
//     });
//   }

//   insertChar = () => {
//     console.log('insertChar');
//     let feedback = {
//       customId: new Date() + 'asd',
//       mensagem: this.state.mensagem_feedback,
//     };
//     const dbRef = database().ref(`chatsCollections/${this.state.chatId}`);

//     dbRef
//       .push({
//         feedback,
//         otherData: 'ok baby',
//       })
//       .then((data) => {
//         this.setState({mensagem_feedback: 'hola oki'});
//         console.log('data ', data);
// 				this.updateVisualizations();
// 				this.savePushToken();
//       })
//       .catch((error) => {
//         console.log('error ', error);
//       });
//   };

//   updateVisualizations = () => {
//     console.warn('updateVisualizations');
//     dbRef = database()
//       .ref(`chatsCollections/${this.state.chatId}/visualizations`)
//       .set({
//         client: 0,
//         admin: 0,
//       });
//   };

//   testFirebase() {
//     console.warn('test fire');
//     database()
//       .ref('/users/123')
//       .set({
//         name: 'Ada Lovelace',
//         age: 31,
//       })
//       .then(() => console.log('Data set.'))
//       .catch((e) => console.warn(e));
// 	}
	
// 	savePushToken = () => {
// 		dbRef = database()
//       .ref(`pushTokens/${this.state.chatId}/visualizations`)
//       .set({
//         client: 0,
//         admin: 0,
//       });
// 	}

//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Chats !</Text>
//         <Button
//           title="Go Home"
//           onPress={() => this.props.navigation.push('HomeUser')}
//         />
//         <Button title="test fire" onPress={() => this.insertChar()} />
//       </View>
//     );
//   }
// }

const ChatScreen = ({ route, navigation }) => {
  const { ticketId } = route.params;
  const chats = [];
  const currentEmail = '';
  const currentMessage = '';
  
  console.warn(ticketId);
  const sendMessage = () => {
    console.warn('send message');
  }; 

  renderItem = ({ item, index }) => {
    
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
              renderItem={ renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
            />

            <View style={styles.viewWrapInput}>
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.viewTextInput}
                placeholder="Type your message..."
                
              />

              <TouchableOpacity onPress={ () => sendMessage()}>
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
