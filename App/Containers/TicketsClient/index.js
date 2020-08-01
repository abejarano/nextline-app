import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Alert,
  ImageBackground,
  SafeAreaView,
	Button,
} from 'react-native';
import {login} from '../../actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonStyled} from '../../Components/button';
import {InputStyled} from '../../Components/input';
import globalStyles from '../../styles';
import EmailSvg from '../../assets/svg/Email';
import SolidLogo from '../../assets/svg/SolidLogo';
import LockSvg from '../../assets/svg/Lock';
import {Header} from '../../Components/header';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const TicketsScreen = ({navigation}) => {

	const tickets = [{id:123, name:'low speed'}, {id:234, name:'too much speed'}];

	return (
		<SafeAreaView>
			<View style={styles.view}>
				<>
					{tickets.map(ticket => (
						<View key={ticket.id}>
							<TouchableOpacity onPress={() => {
							navigation.push('Chat',{ ticketId: ticket.id});
						}}>
								<Text>
									{ticket.name}
								</Text>
							</TouchableOpacity>
						</View>
					))}
				</>
				<>
					<View>
						<ButtonStyled
							onPress={() => {
								navigation.push('TicketsCreateClient');
							}}
							backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
							color={globalStyles.GREEN_COLOR}
							text={'Crear Ticket'}
							style={styles.button}
						/>
					</View>
				</>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
  },
});