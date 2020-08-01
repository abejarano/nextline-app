export const FCM_SEND_DATA = '@push/fcm/SEND_DATA';
export const FCM_SEND_DATA_FAILED = '@push/fcm/SEND_DATA_FAILED';
export const FCM_CONNECT = '@push/fcm/CONNECT';
export const FCM_CONNECT_FAILED = '@push/fcm/CONNECT_FAILED';
export const FCM_HANDLE_MESSAGE = '@push/fcm/HANDLE_MESSAGE';
export const FCM_LISTEN_TO_DATA = '@push/fcm/FCM_LISTEN_TO_DATA';
export const FCM_ERASE_DATA = '@push/fcm/ERASE_DATA';
export const FCM_UPDATE_CLIENT_STATUS = '@push/fcm/FCM_UPDATE_CLIENT_STATUS';
export const FCM_NAVIGATE_TO_ROUTE = '@push/fcm/FCM_NAVIGATE_TO_ROUTE';

export const saveToken = (payload) => ({
  type: FCM_SEND_DATA,
  payload,
});

export const saveTokenFailed = (payload) => ({
  type: FCM_SEND_DATA_FAILED,
  payload,
});

export const connectFmc = (payload) => ({
  type: FCM_CONNECT,
  payload,
});
export const connectFailedFmc = (payload) => ({
  type: FCM_CONNECT_FAILED,
  payload,
});
export const listenToMessages = (payload) => ({
  type: FCM_LISTEN_TO_DATA,
  payload,
});

export const handleMessage = (payload) => ({
  type: FCM_HANDLE_MESSAGE,
  payload,
});

export const deleteToken = () => ({
  type: FCM_ERASE_DATA,
});

export const updateClientStatus = (payload) => ({
  type: FCM_UPDATE_CLIENT_STATUS,
  payload,
});

export const navigateToRoute = (payload) => ({
  type: FCM_NAVIGATE_TO_ROUTE,
  payload,
});
