export const FCM_SEND_DATA = '@push/fcm/SEND_DATA';
export const FCM_LISTEN_TO_DATA = '@push/fcm/FCM_LISTEN_TO_DATA';
export const FCM_ERASE_DATA = '@push/fcm/ERASE_DATA';

export const saveToken = (payload) => ({
  type: FCM_SEND_DATA,
  payload,
});

export const listenToMessages = (payload) => ({
  type: FCM_LISTEN_TO_DATA,
  payload,
});

export const deleteToken = () => ({
  type: FCM_ERASE_DATA,
});
