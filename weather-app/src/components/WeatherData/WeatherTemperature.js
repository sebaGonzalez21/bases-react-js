import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';//validacion de los tipos de objetos
//importar css
import './styles.css'
import {
	CLOUDY,
	SUN,
	SNOW,
	RAIN,
	THUNDER,
	DRIZZLE
} from '../../utils/weather';

const icons = {
	[CLOUDY]: "cloud",
	[SUN]: "day-sunny",
	[SNOW]: "snow",
	[RAIN]: "rain",
	[THUNDER]: "day-thunderstorm",
	[DRIZZLE]: "day-showers"
}

const getWeatherIcon = (wheatherState) =>{
	let icon = icons[wheatherState];
	const sizeIcon = "4x";
	if(!icon){
		icon = "day-sunny";
	};
	return (<WeatherIcons className="wicon" name={icon} size={sizeIcon} />);
}

const WeatherTemperature = ({temperature,wheatherState}) => (
	<div className="WeatherTemperatureCont">
		{
			getWeatherIcon(wheatherState)
		}
		<span className="temperature">{`${temperature} `}</span>
		<span className="temperatureType">{`C°`}</span>
	</div>
);

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	wheatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;