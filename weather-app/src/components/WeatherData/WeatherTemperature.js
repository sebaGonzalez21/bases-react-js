import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';//validacion de los tipos de objetos
import icons from '../../utils/constant';
//importar css
import './styles.css'
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