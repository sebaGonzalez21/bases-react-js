import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import {reduxForm,Field} from 'redux-form';//genera acciones por medio de action creators
import CustomerActions from './CustomersActions';
//import { connect } from 'react-redux'; //react-redux connect
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import { Prompt } from 'react-router-dom';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_EDIT } from '../utils/permissions';

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



class CustomerEdit extends Component {

	componentDidMount(){
		//componentes no controlados
		if(this.txt){
			this.txt.focus();
		}
	}

	renderField = ({input,meta,type,label,name,withFocus}) => (
		<div>
			<label htmlFor={name} >{label}</label>
			<input {...input}
			 	type={!type ? "text": type}
				ref={withFocus && (txt => this.txt= txt) }/>
			{
				meta.touched && meta.error && <span>{meta.error}</span>
			}
			
		</div>
	);

	render() {
		const {handleSubmit,submitting,onBack,pristine,submitSucceded} = this.props;


		return (
			<div>
			<h2>Edición del cliente</h2>
			<form onSubmit={handleSubmit}>
					<Field
						withFocus 
						name="name" 
						component={this.renderField} 
						type="text" 
						placeholder="nombre"
						parse={toUpper}
						format={toLower}
						label={"Nombre"}></Field>
				
					<Field
						name="dni" 
						component={this.renderField} 
						type="text"
						placeholder="dni"
						label={"Dni"}></Field>
					
					<Field name="age" 
					component={this.renderField}  
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
	}
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

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerEditForm));