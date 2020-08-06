import React from 'react';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomersActions';

const customers = [
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
];
	
const CustomersContainer = props => {

	const handleAddNew =() =>{
		console.log("pinchoBoton");
	}


	const renderBody = customers =>(
		<div>
			<CustomerList
				customers={customers} 
				urlPath={'customers/'}>
			</CustomerList>
			<CustomerActions>
				<button onClick={handleAddNew}>Nuevo Cliente</button>
			</CustomerActions>
		</div>
	);

	return (
		<div>
			<AppFrame header='Listado de Clientes'
				body={renderBody(customers)}></AppFrame>
		</div>
	);
};


export default CustomersContainer;