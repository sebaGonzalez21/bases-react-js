import {handleActions} from 'redux-actions';//manejar mediante acciones los reducers
import { FETCH_CUSTOMERS, INSERT_CUSTOMERS,UPDATE_CUSTOMERS } from '../utils/constants';

//espera un objeto con distintas constantes
export const customers = handleActions({
	[FETCH_CUSTOMERS]: (state,action)=>[...action.payload],
	[INSERT_CUSTOMERS]: (state,action) => [...state,action.payload],
	[UPDATE_CUSTOMERS]: (state,action) => [...state,action.payload]
}, []);
