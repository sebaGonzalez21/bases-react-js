import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';//conectar lote de librerias react y redux, funcion que espera como parametros 2 funciones
import  PropTypes from 'prop-types';
import * as actions from '../actions';
import {getWeatherCities, getCity} from '../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component{

	componentDidMount(){
		const {setSelectedWeather,setSelectedCity,cities, city }= this.props;
		setSelectedWeather(cities);
		setSelectedCity(city);
	}

	handleSelectionLocation = city =>{
		this.props.setSelectedCity(city);
	  }

	render(){
		return (
			<LocationList cities={this.props.citiesWeather}
            onSelectedLocation={this.handleSelectionLocation} />
		);
	};

};



LocationListContainer.propTypes ={
	cities: PropTypes.array.isRequired,
	setSelectedCity: PropTypes.func.isRequired,
	setSelectedWeather: PropTypes.func.isRequired,
	citiesWeather: PropTypes.array,
	city: PropTypes.string.isRequired, 
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);//acciones posibles
/*const mapDispatchToProps = dispatch => (
	{
	  setCity: value => dispatch(setSelectedCity(value)),
	  setWeather: cities => dispatch(setSelectedWeather(cities))
	}
);*/

const mapStateToProps = state =>({
	citiesWeather: getWeatherCities(state),
	city: getCity(state)
});
  
//connect recibe 2 funciones,espera que se le pase el componente, se retorna el componente con habilidad de conectarse, componente mejorado con las propiedades
export default connect(mapStateToProps,mapDispatchToProps)(LocationListContainer);