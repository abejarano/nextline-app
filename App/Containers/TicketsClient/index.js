import React, {useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {servicioStatusFetch, contratoStatusFetch} from '../../actions/servicio';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../styles';
import SolidLogin from '../../assets/svg/SolidLogo';
import {SpeedGroup} from '../../Components/speedGroup';
import {Avatar} from '../../Components/avatar';
import {Header} from '../../Components/header';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TicketsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const status = useSelector(
    (state) => state.servicio.status.data.solicitud_servicio,
  );
  const user = useSelector((state) => state.auth.user);
  const plan = useSelector((state) => state.plans.selected);
  const service = useSelector((state) => state.servicio.selected);
	const isClient = useSelector((state) => state.auth.isClient);
	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'First Item',
			status: 'c'
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Second Item',
			status: 'a'
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Third Item',
			status: 'b'
		},
		{
			id: '58694a0f-3da1-271f-bd96-145571e29d72',
			title: 'Third Item',
			status: 'b'
		},
		{
			id: '58694a0f-3da1-271f-bd96-145871e29d72',
			title: 'Third Item',
			status: 'b'
		},
	];
	
	useEffect(() => {
   
	}, [dispatch, isClient]);

	const Item = ({ item, onPress, style }) => (
		<TouchableOpacity onPress={onPress} style={[styles.item, style]}>
			<Text style={styles.title}>{item.title}</Text>
		</TouchableOpacity>
	);

	const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
				item={item}
				style={styles.statusContainer}
      />
    );
  };
	
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/home.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <Header backVisible={false} />
        <View style={styles.userContainer}>
          <Avatar />
          <View style={styles.usernameContainer}>
            <Text style={styles.usernameLabel}>Usuario</Text>
            <Text style={styles.usernameText}>
              {user && user.nombre_razsoc}
            </Text>
          </View>
        </View>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.serviceText}>{service.servicio}</Text>
				<View style={styles.gradientContainer}></View>
				<>
          <TouchableOpacity onPress={() => {
              navigation.push('TicketsCreateClient');
            }}>
            <Text style={styles.statusLabel}>Crear un Nuevo Ticket</Text>
          </TouchableOpacity>
        </>
				<>
					<Text style={styles.statusLabel}>Historial de Tickets</Text>
        </>
				<SafeAreaView style={styles.containerSafe}>
					<FlatList
						data={DATA}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				</SafeAreaView>
				{/* <ScrollView >
					<Text style={styles.statusLabel}>Estatus de solicitud</Text>
					<View style={styles.statusContainer}>
						<Text style={styles.statusText}>{status && status.status}</Text>
						<View style={styles.redCircle} />
					</View>
				</ScrollView> */}
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},
	containerSafe: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
	scrollView: {
		alignItems: 'center',
    padding: 0,
    width: '100%',
  },
  gradientContainer: {
    width: 240,
    height: 240,
    marginBottom: 20,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,

    borderRadius: 240,
    shadowColor: globalStyles.PRIMARY_COLOR_DARK + '33',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  buttonText: {
    fontSize: 44,
    textAlign: 'center',
    fontWeight: 'bold',
    color: globalStyles.WHITE_COLOR,
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
  },
  logo: {
    marginTop: 10,
    marginBottom: -30,
  },
  whiteCircle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 240,
    borderColor: globalStyles.WHITE_COLOR,
    borderWidth: 15,
  },
  buttonLowerText: {
    fontSize: 12,
    textAlign: 'center',
    color: globalStyles.WHITE_COLOR,
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  serviceLabel: {
    fontSize: 10,
    opacity: 1,
    color: globalStyles.LIGTH_BLUE_COLOR,
    textTransform: 'uppercase',
  },
  serviceText: {
    fontSize: 25,
    color: globalStyles.WHITE_COLOR,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  statusLabel: {
    fontSize: 10,
    color: globalStyles.GRAY_TEXT_COLOR,
    textTransform: 'uppercase',
    marginTop: '10%',
  },
  statusText: {
    color: globalStyles.PRIMARY_COLOR,
    textTransform: 'uppercase',
  },
  statusContainer: {
    display: 'flex',
    width: '60%',
		flexDirection: 'row',
		marginLeft: 20,
    justifyContent: 'space-around',
    backgroundColor: globalStyles.GRAY_TEXT_COLOR + '15',
    height: 36,
    alignItems: 'center',
    borderRadius: 2,
  },
  redCircle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: globalStyles.RED_COLOR,
  },
  userContainer: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: -20,
    marginBottom: 20,
  },
  usernameContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
  },
  usernameLabel: {
    fontSize: 10,
    opacity: 1,
    color: globalStyles.LIGTH_BLUE_COLOR,
    textTransform: 'uppercase',
  },
  usernameText: {
    fontSize: 20,
    color: globalStyles.WHITE_COLOR,
    textTransform: 'capitalize',
  },
});

export default TicketsScreen;

// export const TicketsScreen = ({navigation}) => {
// 	const tickets = [{id:123, name:'low speed'}, {id:234, name:'too much speed'},  {id:1, name:'testing the chat and ticket'}];

// 	return (
// 		<SafeAreaView>
// 			<View style={styles.view}>
// 				<>
// 					{tickets.map(ticket => (
// 						<View key={ticket.id}>
// 							<TouchableOpacity onPress={() => {
// 							navigation.push('Chat',{ ticketId: ticket.id});
// 						}}>
// 								<Text>
// 									{ticket.name}
// 								</Text>
// 							</TouchableOpacity>
// 						</View>
// 					))}
// 				</>
// 				<>
// 					<View>
// 						<ButtonStyled
// 							onPress={() => {
// 								navigation.push('TicketsCreateClient');
// 							}}
// 							backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
// 							color={globalStyles.GREEN_COLOR}
// 							text={'Crear Ticket'}
// 							style={styles.button}
// 						/>
// 					</View>
// 				</>
// 			</View>
// 		</SafeAreaView>
// 	);
// };
 