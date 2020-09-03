import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';

class CustomerContainer extends Component {

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
				return <CustomerControl {...this.props.customer}/>
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
		customer: PropTypes.object.isRequired
	}
}

//manejar estados en selectores para que no sean conocidos por los container
const mapStateToProps = (state,props) => ({
	customer: getCustomerByDni(state,props)
});

export default connect(mapStateToProps,null)(CustomerContainer);
