import {ofType} from 'redux-observable';
import {from, of, Observable} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {
  FCM_SEND_DATA,
  saveToken,
  listenToMessages,
  handleMessage,
  FCM_CONNECT,
  connectFailedFmc,
  saveTokenFailed,
} from '../actions/fcm';
import {combineEpics} from 'redux-observable';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import fcmSettings from '../Services/fcmSettings';

const saveTokenEpic = (action$, state$) =>
  action$.pipe(
    ofType(FCM_SEND_DATA),
    mergeMap((action, $state) =>
      from(
        axios.get(
          `${process.env.api}/device/`,
          {
            headers: {
              Authorization: `Token ${state$.value.auth.token}`,
            },
          },
          {
            dev_id: 'string',
            reg_id: action.payload.token,
            name: action.payload.platform,
            usuario_aplicacion: $state.user,
          },
        ),
      ).pipe(
        map((response) => listenToMessages()),
        catchError((error) => of(saveTokenFailed(error))),
      ),
    ),
  );

// const deleteTokenEpic = (action$) =>
//   action$.pipe(
//     ofType(FCM_ERASE_DATA),
//     mergeMap((action) =>
//       from(AsyncStorage.removeItem('nl-token')).pipe(
//         map(() => signoutSuccess()),
//         catchError((error) => console.error(error)),
//       ),
//     ),
//   );

const FcmService = (action$) =>
  action$.pipe(
    ofType(FCM_CONNECT),
    mergeMap((action) =>
      from(messaging().requestPermission(fcmSettings)).pipe(
        map((authStatus) => {
          return (
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL
          );
        }),
        mergeMap((enabled) => {
          if (enabled) {
            const tokenSaver$ = new Observable((subscriber) => {
              messaging()
                .getToken()
                .then((token) => {
                  subscriber.next({isToken: true, token});
                });

              messaging().onTokenRefresh((token) => {
                console.log('Remote', token);

                subscriber.next({isToken: true, token});
              });
              messaging().onMessage(async (remoteMessage) => {
                console.log('Remote', remoteMessage);
                subscriber.next({
                  isToken: false,
                  message: {message: remoteMessage, isBackground: false},
                });
              });

              messaging().setBackgroundMessageHandler(async (remoteMessage) => {
                console.log('Remote', remoteMessage);

                subscriber.next({
                  isToken: false,
                  message: {message: remoteMessage, isBackground: true},
                });
              });
            });
            return tokenSaver$;
          } else {
            return of({isToken: false, isError: true});
          }
        }),
        map(({isToken, token, message}) =>
          isToken ? saveToken(token) : handleMessage(message),
        ),
        catchError((error) => connectFailedFmc(error)),
      ),
    ),
  );

export const fcmEpics = combineEpics(saveTokenEpic, FcmService);
