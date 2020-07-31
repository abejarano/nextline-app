import {ofType} from 'redux-observable';
import {from, of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {
	FCM_SEND_DATA,
	FCM_LISTEN_TO_DATA,
	FCM_ERASE_DATA,
	saveToken,
	listenToMessages,
	deleteToken
} from '../actions/fcm';
import {combineEpics} from 'redux-observable';
import axios from 'axios';

const saveTokenEpic = (action$, state$) =>
  action$.pipe(
    ofType(FCM_SEND_DATA),
    mergeMap((action, $state) =>
      from(
        axios.get(`${process.env.api}/device/`, {
          headers: {
            Authorization: `Token ${state$.value.auth.token}`,
          },
        }, {
					dev_id: "string",
					reg_id: payload.token,
					name: payload.platform,
					usuario_aplicacion: $state.user
				}),
      ).pipe(
        map((response) => listenToMessages()),
        catchError((error) => console.error(error)),
      ),
    ),
	);
	

const deleteTokenEpic = (action$) =>
  action$.pipe(
    ofType(FCM_ERASE_DATA),
    mergeMap((action) =>
      from(AsyncStorage.removeItem('nl-token')).pipe(
        map(() => signoutSuccess()),
        catchError((error) => console.error(error)),
      ),
    ),
  );

	const deleteTokenEpic = (action$) =>
  action$.pipe(
    ofType(FCM_ERASE_DATA),
    mergeMap((action) =>
      from(AsyncStorage.removeItem('nl-token')).pipe(
        map(() => signoutSuccess()),
        catchError((error) => console.error(error)),
      ),
    ),
  );

export const fcmEpics = combineEpics(saveTokenEpic, deleteTokenEpic);
