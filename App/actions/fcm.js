import {actionGenerator} from './utils';

export const FCM_SEND_DATA = '@push/fcm/SEND_DATA';
export const FCM_SEND_DATA_FAILED = '@push/fcm/SEND_DATA_FAILED';
export const FCM_CONNECT = '@push/fcm/CONNECT';
export const FCM_CONNECT_FAILED = '@push/fcm/CONNECT_FAILED';
export const FCM_HANDLE_MESSAGE = '@push/fcm/HANDLE_MESSAGE';
export const FCM_LISTEN_TO_DATA = '@push/fcm/FCM_LISTEN_TO_DATA';
export const FCM_ERASE_DATA = '@push/fcm/ERASE_DATA';
export const FCM_UPDATE_CLIENT_STATUS = '@push/fcm/FCM_UPDATE_CLIENT_STATUS';
export const FCM_NAVIGATE_TO_ROUTE = '@push/fcm/FCM_NAVIGATE_TO_ROUTE';

export const saveToken = actionGenerator(FCM_SEND_DATA);

export const saveTokenFailed = actionGenerator(FCM_SEND_DATA_FAILED);

export const connectFmc = actionGenerator(FCM_CONNECT);

export const connectFailedFmc = actionGenerator(FCM_CONNECT_FAILED);

export const listenToMessages = actionGenerator(FCM_LISTEN_TO_DATA);

export const handleMessage = actionGenerator(FCM_HANDLE_MESSAGE);

export const deleteToken = actionGenerator(FCM_ERASE_DATA);

export const updateClientStatus = actionGenerator(FCM_UPDATE_CLIENT_STATUS);

export const navigateToRoute = actionGenerator(FCM_NAVIGATE_TO_ROUTE);
