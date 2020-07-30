export const PROFILE_SENDING_DATA = '@profile/update/SENDING_DATA';
export const PROFILE_UPDATE_SUCCESS = '@profile/update/SUCCESS';
export const PROFILE_UPDATE_FAILED = '@profile/update/FAILED';
export const LOAD_PROFILE = '@profile/load/profile';
export const LOAD_PROFILE_SUCCESS = '@profile/load/SUCCESS';
export const LOAD_PROFILE_FAILED = '@profile/load/failed';

export const updateProfile = (payload) => ({
  type: PROFILE_SENDING_DATA,
  payload,
});

export const updateProfileSuccess = (payload) => ({
  type: PROFILE_UPDATE_SUCCESS,
  payload,
});

export const updateProfileFailed = (payload) => ({
  type: PROFILE_UPDATE_FAILED,
  payload,
});

export const loadProfile = (payload) => ({
  type: LOAD_PROFILE,
  payload,
});

export const loadProfileSuccess = (payload) => ({
  type: LOAD_PROFILE_SUCCESS,
  payload,
});

export const loadProfileFailed = (payload) => ({
  type: LOAD_PROFILE_FAILED,
  payload,
});
