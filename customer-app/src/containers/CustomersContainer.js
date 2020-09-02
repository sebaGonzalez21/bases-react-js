import React from 'react';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CustomerActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';//accion a ejecutar del servicio
import { Component } from 'react';
import { getCustomers } from '../selectors/customers';
	
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
					body={this.renderBody(this.props.customers)}></AppFrame>
			</div>
		);
	}	
	
};

CustomersContainer.propTypes = {
	fetchCustomers: PropTypes.func.isRequired,
	customers: PropTypes.array.isRequired
}

CustomersContainer.defaultProps = {
	customers: []
};

const mapStateToProps = state => ({
	customers: getCustomers(state)
})
export default withRouter(connect(mapStateToProps,{fetchCustomers})(CustomersContainer));