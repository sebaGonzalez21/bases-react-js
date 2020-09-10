import {handleActions} from 'redux-actions';//manejar mediante acciones los reducers
import { FETCH_CUSTOMERS, INSERT_CUSTOMERS,UPDATE_CUSTOMERS } from '../utils/constants';

//espera un objeto con distintas constantes
export const customers = handleActions({
	[FETCH_CUSTOMERS]: (state,action)=>[...action.payload],
	[INSERT_CUSTOMERS]: (state,action) => [...state,action.payload],
	[UPDATE_CUSTOMERS]: (state,action) => {
		const customerPayload = action.payload;
		const {id} = customerPayload;
		const customers = state;
		const initialValue = [];
		//primera iteracion
		//acc []
		// {id:1 name: ''....}

		//segunda iteracion
		//acc {id:1 name: ''....}
		//{id: 2, name: 'viejo nombre',....} => {id: 2, name: 'nuevo nombre',....}
		//[{id: 2, name: 'nuevo nombre',....}]
		const newCustomers = customers.reduce((acc,customer)=>{
			if(customer.id === id){
				return [...acc,customerPayload];
			}else{
				return [...acc,customer]
			}
		},initialValue);
		return newCustomers;
	}
}, []);
