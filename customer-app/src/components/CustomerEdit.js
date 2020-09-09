import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm,Field} from 'redux-form';//genera acciones por medio de action creators
import CustomerActions from './CustomersActions';
//import { connect } from 'react-redux'; //react-redux connect
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import { Prompt } from 'react-router-dom';

/*
const isRequired = value =>(
	!value && "Este campo es requerido"
);*/

const validate = values => {
	const error = {};
	
	if(!values.name){
		error.name = "Este campo nombre es requerido";
	}

	if(!values.dni){
		error.dni = "El dni es obligatorio";
	}

	return error;
};

const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();

const toLower = value => value && value.toLowerCase();

const onlyGrow = (value,previousValue,values) => 
	  value && (!previousValue ? value : (value > previousValue ? value : previousValue));

const isNumber = value => (
	isNaN(Number(value)) && "El campo debe ser numerico"
);

const MyField = ({input,meta,type,label,name}) => (
	<div>
		<label htmlFor={name} >{label}</label>
		<input {...input} type={!type ? "text": type}/>
		{
			meta.touched && meta.error && <span>{meta.error}</span>
		}
		
	</div>
);

const CustomerEdit = ({name,dni,age,handleSubmit,submitting,onBack,pristine,submitSucceded}) => {

	return (
		<div>
			<h2>Edición del cliente</h2>
			<form onSubmit={handleSubmit}>
					<Field 
						name="name" 
						component={MyField} 
						type="text" 
						placeholder="nombre"
						parse={toUpper}
						format={toLower}
						label={"Nombre"}></Field>
				
					<Field 
						name="dni" 
						component={MyField} 
						type="text"
						placeholder="dni"
						label={"Dni"}></Field>
					
					<Field name="age" 
					component={MyField}  
					type="number"
					validate={[isNumber]} 
					placeholder="edad"
					label={"Edad"}
					parse={toNumber}
					normalize={onlyGrow}></Field>
					
					<CustomerActions>
						<button type="submit" disabled={pristine || submitting} >Aceptar</button>
						<button type="button" disabled={submitting} onClick={onBack} >Cancelar</button>
					</CustomerActions>
					<Prompt 
					when={!pristine && !submitSucceded}
					message="Se perderan los datos si continua"></Prompt>

			</form>
		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number,
	onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm(
			{
				form: 'CustomerEdit',
				validate
			})(CustomerEdit);

/*
export default connect((state,props) => (
				{ initialValues: props }
				))(CustomerEditForm);*/

export default setPropsAsInitial(CustomerEditForm);