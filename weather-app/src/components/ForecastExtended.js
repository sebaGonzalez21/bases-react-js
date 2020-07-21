import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForeCastItem from './ForeCastItem/index';
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

const renderForeCastItemDays = (forecastData)=>{
	return forecastData.map(forecast =>
		(<ForeCastItem  
			key={`${forecast.weekDay}${forecast.hour}`}
			weekDay={forecast.weekDay}
			hour={forecast.hour} 
			data={forecast.data}>
		 </ForeCastItem>)
	)
}

const renderProgress = ()=>{
	return (
		<h3 className="forecast-loading">cargando pronostico extendido...</h3>
	);
}

const ForecastExtended = ({city,forecastData})=> {
	return (
		
		/*
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
			const urlForecast = getUrlForecastByCity(city);
			
			fetch(urlForecast)
			.then( data => data.json())
			.then(weather_data=>{
				const forecastData = transformForecast(weather_data);
				//modificar el estado con el resultado de la promise(fetch)
				this.setState({forecastData})
			})
			.catch(err=>{
				console.log(err);
				return err;
			});
		}
		*/
		<div>
				<h2 className="forecast-title">Prónostico extendido para: {city}</h2>
				{forecastData ?
				 renderForeCastItemDays(forecastData) :
				 renderProgress()}
		</div>
	)
};

ForecastExtended.propTypes ={
	city: PropTypes.string.isRequired,
	forecastData: PropTypes.array
}

export default ForecastExtended;