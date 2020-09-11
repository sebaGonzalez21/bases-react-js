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
import {deleteCustomer} from '../actions/deleteCustomer';
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {

	//va a obtener la informacion
	componentDidMount(){
		if(!this.props.customer){
			this.props.fetchCustomers();
		}
	}

	
	handleOnBack = () => {
		this.props.history.goBack();
	}

	handleOnSubmitSuccess = () => {
		this.props.history.goBack();
	}

	//evento de obtener los valores
	handleSubmit = values => {
		const {id} = values;
		return this.props.updateCustomer(id,values).then(r=>{
			if (r.payload && r.payload.error) {
                throw new SubmissionError(r.payload.error);
            }
		});//promise submitting para desabilitar el boton
	}

	handleOnDelete = (id) =>{
		return this.props.deleteCustomer(id).then(r=>{
			if (r.payload && r.payload.error) {
                throw new SubmissionError(r.payload.error);
			}
			this.props.history.goBack();
		});//promise submitting para desabilitar el boton
	}
	
	renderCustomerControl = (isEdit,isDelete) => {
		if(this.props.customer){
			const CustomerControl = isEdit ? CustomerEdit : CustomerData;
			return <CustomerControl {...this.props.customer} 
					onSubmit={this.handleSubmit}
					onSubmitSuccess={this.handleOnSubmitSuccess} 
					onBack={this.handleOnBack}
					isDeleteAllow={!!isDelete}
					onDelete={this.handleOnDelete} />//initialValues={this.props.customer} propiedad redux form precargar valores
		}
		return null;
	}

	//controles dinamicamente
	//routeo en diferentes niveles y componentes
	renderBody = () => (
		
		<Route path="/customers/:dni/edit" children={
			/*({ match }) => ( 
			//   match ? 
			//   <CustomerEdit {...this.props.customer}/>: 
			  <CustomerData {...this.props.customer}/>)*/ 
			( {match: isEdit}) => (
							<Route path="/customers/:dni/del" children={
								({match: isDelete}) => ( this.renderCustomerControl(isEdit,isDelete))}
						/>)
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
		deleteCustomer: PropTypes.func.isRequired,
	}
}

//manejar estados en selectores para que no sean conocidos por los container
const mapStateToProps = (state,props) => ({
	customer: getCustomerByDni(state,props),
});

export default withRouter(connect(mapStateToProps,{
	fetchCustomers,
	updateCustomer,
	deleteCustomer
})(CustomerContainer));
