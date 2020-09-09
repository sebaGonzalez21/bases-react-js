import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route,withRouter } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import {fetchCustomers} from '../actions/fetchCustomers';
import {updateCustomer} from '../actions/updateCustomer';
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {

	//va a obtener la informacion
	componentDidMount(){
		if(!this.props.customer){
			this.props.fetchCustomers();
		}
	}

	//evento de obtener los valores
	handleSubmit = values => {
		console.log(JSON.stringify(values));
		const {id} = values;
		return this.props.updateCustomer(id,values).then(r=>{
			if(r.error){
				throw new SubmissionError(r.payload);
			}
		});//promise submitting para desabilitar el boton
	}

	handleOnBack = () => {
		this.props.history.goBack();
	}

	handleOnSubmitSuccess = () => {
		this.props.history.goBack();
	}
	
	//controles dinamicamente
	//routeo en diferentes niveles y componentes
	renderBody = () => (
		
		<Route path="/customers/:dni/edit" children={
			/*({ match }) => ( 
			//   match ? 
			//   <CustomerEdit {...this.props.customer}/>: 
			  <CustomerData {...this.props.customer}/>)*/ 
			( {match}) =>{
				const CustomerControl = match ? CustomerEdit : CustomerData;
				return <CustomerControl {...this.props.customer} 
						onSubmit={this.handleSubmit}
						onSubmitSuccess={this.handleOnSubmitSuccess} 
						onBack={this.handleOnBack} />//initialValues={this.props.customer} propiedad redux form precargar valores
			}
		}/>
	)

	//<p>Datos del Cliente "{this.props.customer.name}"</p>
	render() {
		return (
			<div>
				<AppFrame header={`Cliente  ${this.props.dni}`}
				body={this.renderBody()}>
				</AppFrame>
			</div>
		)
	}

	static propTypes = {
		dni: PropTypes.string.isRequired,
		customer: PropTypes.object,
		fetchCustomers: PropTypes.func.isRequired,
		updateCustomer: PropTypes.func.isRequired,
	}
}

//manejar estados en selectores para que no sean conocidos por los container
const mapStateToProps = (state,props) => ({
	customer: getCustomerByDni(state,props),
});

export default withRouter(connect(mapStateToProps,{
	fetchCustomers,
	updateCustomer
})(CustomerContainer));
