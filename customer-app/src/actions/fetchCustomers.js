import {FETCH_CUSTOMERS} from '../utils/constants';
import { createAction } from 'redux-actions';

const customers= [
	{
	  "dni": "18886324-3",
	  "name": "Sebas Perez",
	  "age": 38	
	},
	{
		"dni": "18584334-3",
		"name": "Isaias Gonzalez",
		"age": 22	
	},
	{
		"dni": "20886324-3",
		"name": "Manuel Figueroa",
		"age": 28	
	}
]

export const fetchCustomers = createAction(FETCH_CUSTOMERS,()=>customers);