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
import { TextInput } from 'react-native-gesture-handler';

export const CreateTicketsScreen = ({navigation}) => {

	const { ticket, setTicket } = useState('');

	return (
		<SafeAreaView>
			<View style={styles.view}>
				<>
					<TextInput 
						onChangeText={text => setTicket(text)}
      			value={ticket}
					>
					</TextInput>
				</>
				<>
					<View>
						<ButtonStyled
							onPress={() => {
								navigation.push('Chat',{ ticketId: Math.trunc(Math.random() * (2100 - 1100) + 1100)});
							}}
							backgroundColor={globalStyles.LIGTH_BLUE_COLOR}
							color={globalStyles.GREEN_COLOR}
							text={'Save Ticket'}
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