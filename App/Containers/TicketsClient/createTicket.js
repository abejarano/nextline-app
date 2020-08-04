import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, StyleSheet, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../styles';
import {Avatar} from '../../Components/avatar';
import {Header} from '../../Components/header';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonStyled } from '../../Components/button';
import { InputStyled } from '../../Components/input';

export const CreateTicketsScreen = ({navigation}) => {
	const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
	
  const status = useSelector(
    (state) => state.servicio.status.data.solicitud_servicio,
  );
  const user = useSelector((state) => state.auth.user);
  const plan = useSelector((state) => state.plans.selected);
  const service = useSelector((state) => state.servicio.selected);
	const isClient = useSelector((state) => state.auth.isClient);
	
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
					<SafeAreaView style={styles.containerSafe}>
						<ScrollView>
							<View style={styles.tableContainer}>
								<View style={styles.tableRow}>
									<Text style={styles.tableText}>titulo</Text>
								</View>
								<View style={styles.tableRow}>
									<InputStyled
										placeholder=""
										onChange={(text) => {
											setTitle(text);
										}}
										value={title}
										iconColor={globalStyles.PRIMARY_COLOR}
									/>
								</View>
								<View style={styles.tableRow}>
									<Text style={styles.tableText}>Descripcion</Text>
								</View>
								<View style={styles.tableRow}>
									<InputStyled
										placeholder=""
										isMultiline={true}
										onChange={(text) => {
											setDescription(text);
										}}
										style={styles.textArea}
										value={description}
										iconColor={globalStyles.PRIMARY_COLOR}
									/>
								</View>
								<View style={styles.tableRow}>
								<TouchableOpacity onPress={() => {
										console.warn("adjuntar");
									}}>
									<Text style={styles.tableText}>Adjuntar un Archivo</Text>
								</TouchableOpacity>
								</View>
							</View>
						</ScrollView> 
					</SafeAreaView>
          
					<ButtonStyled
						onPress={() => {
							navigation.push('Chat',{ ticketId: Math.trunc(Math.random() * (2100 - 1100) + 1100)});
						}}
						backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
						color={globalStyles.WHITE_COLOR}
						text={'Enviar'}
						style={styles.button}
					/>
        </>
				<>
					<Text style={styles.statusLabel}>Historial de Tickets</Text>
        </>
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
  },
	scrollView: {
		alignItems: 'center',
    padding: 0,
    width: '100%',
  },
  gradientContainer: {
    // width: 240,
    height: '15%',
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
		marginLeft: 60,
		// marginRight: 30
	},
	tableRow: {
		width: '100%'
	},
	tableText: {
		marginLeft: 20
	},
  logo: {
    marginTop: 10,
    marginBottom: -30,
	},
	textArea: {
		height: 70, 
		borderRadius:1
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

export default CreateTicketsScreen;  

{/* <ButtonStyled
	onPress={() => {
		navigation.push('Chat',{ ticketId: Math.trunc(Math.random() * (2100 - 1100) + 1100)});
	}}
	backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
	color={globalStyles.GREEN_COLOR}
	text={'Save Ticket'}
	style={styles.button}
/> */}