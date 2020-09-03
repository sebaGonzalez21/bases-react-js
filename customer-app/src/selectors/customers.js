import {createSelector} from 'reselect';

export const getCustomers = state => {
	return state.customers;
};

//state y props, filtro y el resultado de la funcion lo asigna a un customer
export const getCustomerByDni = createSelector(
	(state,props) => state.customers.find(c=> c.dni === props.dni),
	customer => customer
)