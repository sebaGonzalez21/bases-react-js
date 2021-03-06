import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';
import { CUSTOMER_VIEW } from '../utils/permissions';
import { accessControl } from '../helpers/accessControl';

const CustomerData = ({id,name,dni,age,onBack,isDeleteAllow,onDelete}) => {

	return (
		<div>
			<div className="customer-data">
				<h2>Datos del cliente</h2>
				<div><strong>Nombre </strong><i>{name}</i></div>
				<div><strong>DNI </strong><i>{dni}</i></div>
				<div><strong>Edad </strong><i>{age}</i></div>
			</div>
			<CustomersActions>
				<button onClick={onBack} >Volver</button>
				{isDeleteAllow ? <button onClick={() => onDelete(id)}>Eliminar</button> : null}
			</CustomersActions>
		</div>
	);
};

CustomerData.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number,
	onBack: PropTypes.func.isRequired,
	isDeleteAllow: PropTypes.bool,
	onDelete: PropTypes.func
};

export default accessControl([CUSTOMER_VIEW])(CustomerData);