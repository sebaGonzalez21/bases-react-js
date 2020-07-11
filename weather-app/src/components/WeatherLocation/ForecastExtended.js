import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import getUrlForecastByCity from '../../services/getUrlForecastByCity';
import transformForecast from '../../services/transformForecast';
import ForeCastItem from '../ForeCastItem/index';
/*
const days =[
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes'
]

const data = {
	temperature: 10,
	weatherState: 'normal',
	humidity: 10,
	wind: 'normal'
}**/

class ForecastExtended extends Component{
	
	constructor(){
		super();
		//No existe informacion cuando inicia el componente
		this.state = {
			forecastData: null
		}
	}

	//la primera vez consume el servicio ese componente con informacion
	componentDidMount(){
		this.updateCity(this.props.city);
	}

	//actualiza cuando se le pasan propiedades, punto previo al establecimiento de propiedades y actualizacion de componentes
	//se utiliza para actualizar el componente y hacer algun en concecuencia
	//se ejecuta siempre que se modifican, ecepto la primera vez, por eso es necesario ejecutarlo en component did mount
	componentWillReceiveProps(nextProps){
		if(nextProps.city !== this.props.city){
			this.setState({forecastData: null});
			this.updateCity(nextProps.city);
		}
	}

	updateCity = (city) =>{
		const urlForecast = getUrlForecastByCity(this.props.city);
		//
		fetch(urlForecast)
		.then( data => data.json())
		.then(weather_data=>{
			console.log(weather_data);
			console.log("");
			const forecastData = transformForecast(weather_data);
			console.log(forecastData);
			this.setState({
				forecastData: forecastData
			})
		})
		.catch(err=>{
			console.log(err);
			return err;
		});
	}

	renderForeCastItemDays(forecastData){
		return forecastData.map(forecast =>
			(<ForeCastItem  
				key={`${forecast.weekDay}${forecast.hour}`}
				weekDay={forecast.weekDay}
				hour={forecast.hour} 
				data={forecast.data}>
			 </ForeCastItem>)
		)
	}

	renderProgress(){
		return (
			<h3 className="forecast-loading">cargando pronostico extendido...</h3>
		);
	}

	render(){
	const {city} = this.props;
	const {forecastData} = this.state;
	return (<div>
			<h2 className="forecast-title">Prónostico extendido para la ciudad: {city}</h2>
			{forecastData ? this.renderForeCastItemDays(forecastData):
			 this.renderProgress()}
		</div>);
	}
}

ForecastExtended.propTypes ={
	city: PropTypes.string.isRequired
}

export default ForecastExtended;