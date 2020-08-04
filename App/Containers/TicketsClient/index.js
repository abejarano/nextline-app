import React, {useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../styles';
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
			id: '58694a0f-3da1-271f-bd96-145d71e29d72',
			title: 'asd Item',
			status: 'b'
		},
		{
			id: '58694a0f-3da1-271f-bd96-141871e29d72',
			title: 'last Item',
			status: 'b'
		},
	];

	const TickectItem = ({ item, onPress, style }) => (
		<TouchableOpacity onPress={onPress} style={[styles.item, style]}>
			<Text>{item.title}</Text>
			<Text>{item.id.substring(0, 20)}</Text>
		</TouchableOpacity>
	);

	const renderItem = ({ item }) => {
    const backgroundColor = item.id ? "#6e3b6e" : "#f9c2ff";

    return (
			<View style={styles.itemContainer}>
				<TickectItem
					item={item}
					style={styles.textContainer}
				/>
				<View style={{
						...styles.redCircle,
						backgroundColor,
				}} />
			</View>
      
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
					<>
						<View style={styles.tableContainer}>
							<View style={styles.tableRow}>
								<Text style={styles.tableText}>titulo</Text>
							</View>
							<View style={styles.tableRow}>
								<Text style={styles.tableText}>Descripcion</Text>
							</View>
							<View style={styles.tableRow}>
								<Text style={styles.tableText}>Estatus</Text>
							</View>
						</View>
					</>
					<FlatList
						data={DATA}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				</SafeAreaView>
        
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
		width: '100%',
    flex: 1,
    marginBottom: 10,
  },
	scrollView: {
		alignItems: 'center',
    padding: 0,
    width: '100%',
  },
  gradientContainer: {
    width: 240,
    height: '20%',
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
	tableContainer: {
		flexDirection: 'row',
		marginLeft: 10
	},
	tableRow: {
		width: '33%'
	},
	tableText: {
		marginLeft: 20
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
    marginTop: '4%',
  },
  statusText: {
    color: globalStyles.PRIMARY_COLOR,
    textTransform: 'uppercase',
  },
  textContainer: {
    display: 'flex',
		flexDirection: 'row',
		marginLeft: 20,
    justifyContent: 'space-around',
    backgroundColor: globalStyles.GRAY_TEXT_COLOR + '15',
    width: 250,
    height: 36,
    alignItems: 'center',
    borderRadius: 2,
	},
	itemContainer: {
		margin: 5,
		width: '90%',
		flexDirection: 'row',
    alignItems: 'center',

	},
  redCircle: {
		marginLeft: 10,
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

 
 