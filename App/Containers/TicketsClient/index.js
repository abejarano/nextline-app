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

export const TicketsScreen = ({}) => {

	const tickets = [{id:1, name:'low speed'}, {id:2, name:'too much speed'}];

	return (
		<View style={styles.view}>
			<>
				{tickets.map(ticket => (
					<View key={ticket.id}>
							<Text>
								{ticket.name}
							</Text>
					</View>
				))}
			</>
			<>
				<View>
					<ButtonStyled
						onPress={() => {
							navigation.push('ServiceSelect');
						}}
						backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
						color={globalStyles.GREEN_COLOR}
						text={'Crear Ticket'}
						style={styles.button}
					/>
				</View>
			</>
		</View>
	);
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
  },
});