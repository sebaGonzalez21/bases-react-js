import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import getUrlForecastByCity from '../../services/getUrlForecastByCity'
import ForeCastItem from '../ForeCastItem/index';
import WeatherData from './WeatherData';
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

	componentDidMount(){
		const urlForecast = getUrlForecastByCity(this.props.city);
		
		fetch(urlForecast)
		.then( data => data.json())
		.then(weather_data=>{
			console.log(weather_data)
			this.setState({
				forecastData: weather_data
			})
		})
		.catch(err=>{
			console.log(err);
			return err;
		});
	}

	renderForeCastItemDays(){
		return "render items";
		/*return days.map(day => 
			(<ForeCastItem key={day} weekDay={day} hour={10} data={data}></ForeCastItem>)
		)**/
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
			{forecastData ? this.renderForeCastItemDays(): this.renderProgress()}
		</div>);
	}
}

ForecastExtended.propTypes ={
	city: PropTypes.string.isRequired
}

export default ForecastExtended;