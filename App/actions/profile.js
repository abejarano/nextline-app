import {actionGenerator} from './utils';

export const PROFILE_SENDING_DATA = '@profile/update/SENDING_DATA';
export const PROFILE_UPDATE_SUCCESS = '@profile/update/SUCCESS';
export const PROFILE_UPDATE_FAILED = '@profile/update/FAILED';
export const LOAD_PROFILE = '@profile/load/profile';
export const LOAD_PROFILE_SUCCESS = '@profile/load/SUCCESS';
export const LOAD_PROFILE_FAILED = '@profile/load/failed';

export const updateProfile = actionGenerator(PROFILE_SENDING_DATA);

export const updateProfileSuccess = actionGenerator(PROFILE_UPDATE_SUCCESS);

export const updateProfileFailed = actionGenerator(PROFILE_UPDATE_FAILED);

export const loadProfile = actionGenerator(LOAD_PROFILE);

export const loadProfileSuccess = actionGenerator(LOAD_PROFILE_SUCCESS);

export const loadProfileFailed = actionGenerator(LOAD_PROFILE_FAILED);
