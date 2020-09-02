import {handleActions} from 'redux-actions';//manejar mediante acciones los reducers
import { FETCH_CUSTOMERS } from '../utils/constants';

//espera un objeto con distintas constantes
export const customers = handleActions({
	[FETCH_CUSTOMERS]: (state,action)=>[...action.payload]
}, []);
