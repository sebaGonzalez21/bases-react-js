import React from 'react';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CustomerActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';//accion a ejecutar del servicio
import { Component } from 'react';

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
	
class CustomersContainer extends Component {

	//para ver si invoca la peticion es necesario crear plugin
	componentDidMount(){
		this.props.fetchCustomers();
	}

	handleAddNew =() =>{
		this.props.history.push('/customers/new');
	}

	renderBody = customers =>(
		<div>
			<CustomerList
				customers={customers} 
				urlPath={'customers/'}>
			</CustomerList>
			<CustomerActions>
				<button onClick={this.handleAddNew}>Nuevo Cliente</button>
			</CustomerActions>
		</div>
	);
	render(){
		return (
			<div>
				<AppFrame header='Listado de Clientes'
					body={this.renderBody(customers)}></AppFrame>
			</div>
		);
	}	
	
};

CustomersContainer.propTypes = {
	fetchCustomers: PropTypes.func.isRequired,
}

export default withRouter(connect(null,{fetchCustomers})(CustomersContainer));