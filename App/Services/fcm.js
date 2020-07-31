import messaging from '@react-native-firebase/messaging';
import settings from './fcmSettings';
import { Platform } from 'react-native';
import { Alert } from 'react-native';

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
	listenWhenInBackground();
	return listenToNotifications();
}

const listenToNotifications = () => {
	messaging().onMessage(async remoteMessage => {
		Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
	})
};

const listenWhenInBackground = () => {
	messaging().setBackgroundMessageHandler(async remoteMessage => {
		console.log('Message handled in the background!', remoteMessage);
	})
};

export default FcmService;

