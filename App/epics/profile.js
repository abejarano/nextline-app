import {ofType} from 'redux-observable';
import {from, of} from 'rxjs';
import {mergeMap, map, catchError} from 'rxjs/operators';
import { 
	PROFILE_SENDING_DATA,
	PROFILE_UPDATE_SUCCESS,    
	PROFILE_UPDATE_FAILED,    
	LOAD_PROFILE,    
	LOAD_PROFILE_SUCCESS,
	LOAD_PROFILE_FAILED, 
	updateProfile,
	updateSuccess,
	updateFailed,
	loadProfile,
	loadProfileSuccess,
	loadProfileFailed ,
} from '../actions/profile';
import {combineEpics} from 'redux-observable';
import axios from 'axios';

const loadProfileEpic = (action$) =>
  action$.pipe(
    ofType(LOAD_PROFILE),
		mergeMap((action) =>
			from(axios.get(`${process.env.api}/admon/perfil/`, { headers: {'Authorization': `Token ${payload.token}`} } )).pipe(
				map((response) => loginSuccess(response.data)),
				catchError((error) => of(loadProfileFailed(error))),
			), 
    ),
	);
	
export const profileEpics = combineEpics(loadProfileEpic);
