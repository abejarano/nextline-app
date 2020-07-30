import messaging from '@react-native-firebase/messaging';
import settings from './fcmSettings';
import { Platform } from 'react-native';

const FcmService = () => {
	console.log("_ FcmService _");

		async function requestUserPermission() {
			
			const authStatus = await messaging().requestPermission(settings);
			const enabled =
				authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
				authStatus === messaging.AuthorizationStatus.PROVISIONAL;

			if (enabled) {
				console.log('Authorization status:', authStatus);
				messaging()
					.getToken()
					.then(token => {
						return saveTokenToDatabase(token);
					});

				return messaging().onTokenRefresh(token => {
					console.warn('onTokenRefresh');
					saveTokenToDatabase(token);
				});
			}
		}

		requestUserPermission();
};

const saveTokenToDatabase = (token) => {
	console.warn("token", token);
	return listenToNotifications();
}

const listenToNotifications = () => {
	console.log("listenToNotifications");
}

export default FcmService;

