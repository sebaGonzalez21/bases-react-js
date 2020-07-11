import React, { Component } from 'react';
import {connect} from 'react-redux';//conectar lote de librerias react y redux, funcion que espera como parametros 2 funciones
import  PropTypes from 'prop-types';
import {setCity} from '../actions';
import LocationList from './../components/WeatherLocation/LocationList';

class LocationListContainer extends Component{

	handleSelectionLocation = city =>{
		this.props.setCity(city);
	  }

	render(){
		return (
			<LocationList cities={this.props.cities}
            onSelectedLocation={this.handleSelectionLocation} />
		);
	};

};



LocationListContainer.propTypes ={
	cities: PropTypes.string.isRequired,
	setCity: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => (
	{
	  setCity: value => dispatch(setCity(value))
	}
  );
  
//connect recibe 2 funciones,espera que se le pase el componente, se retorna el componente con habilidad de conectarse, componente mejorado con las propiedades
export default connect(null,mapDispatchToProps)(LocationListContainer);