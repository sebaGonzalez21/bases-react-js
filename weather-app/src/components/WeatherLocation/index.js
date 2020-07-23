import React from 'react'; //importar react para trabajar con react dentro del archivo
import Location from './Location';
import WeatherData from './WeatherData';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import './styles.css'
//import transformWeather from '../../services/transformWeather';
//import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
/*
const data2 = {
	temperature: 15,
	weatherState: icons.snow,
	humidity: 20,
	wind: '20 m/s'
}*/


//componente de tipo clase
//cuando se necesita utilizar alguna instancia es necesario utilizarlo
const WeatherLocation = ({onWeatherLocationClick,city,data} ) => (
	/*
	//states, estado de componentes tipo clase se ejecuta primero
	constructor(props){
		super(props);//desde donde extiende el componente
		const {city} = props;

		//estado parcial del componente para ayudar a que se renderice
		this.state = {
			city,
			data: null
		}
		//console.log("constructor");
	}
	
	//al final para ir a buscar data al servidor al iniciar el servicio
	componentDidMount(){
		//console.log("componentDidMount");
		this.handleUpdateClick();
	}
	/*
	//ciclo de actualizacion se ejecuta solo cuando se actualiza
	componentDidUpdate(prevProps, prevState) {
		//console.log("componentDidUpdate");
		
	}
	
	//se ejecuta de los segundos obsoleto,cuando aun no se renderiza
	componentWillMount(){
		//console.log("componentWillMount");
	}

	//
	componentWillUpdate(){
		//console.log("componentWillUpdate");
		
	}

	handleUpdateClick = () =>{
		//pending //resolve //reject
		const apiWeather = getUrlWeatherByCity(this.state.city);
		
		fetch(apiWeather).then(resolve => {
			return resolve.json();
		}).then(data=>{
			const newWeather = transformWeather(data);
			this.setState({
				data: newWeather
			});
		})
		.catch(err => {
			console.log(err);
			return err;
		});
		
		/*
		//modificacion de estados para cuando se modifica
		this.setState({
			city: "Santiago!",
			data: data
		});
	};*/
	
	//penultimo resultado en el dom
	//render = () =>{
		//const {onWeatherLocationClick,city,data}  = this.props;
		//dentro del render llamada de objetos
		//const {city,data } = this.state;

		// no renderizar si no tengo data
		//return ();
		<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
				<Location city={city}></Location>
				{data ? 
					<WeatherData data={data}></WeatherData> :
				    <CircularProgress />}
				{/*<button onClick={this.handleUpdateClick}>Actualizar</button> */}
			</div>
	//}
);

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func,
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	})
}

export default WeatherLocation;//el componente se indica que estara disponible para invocarlo