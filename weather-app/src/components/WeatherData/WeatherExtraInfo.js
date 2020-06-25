import React from 'react';
import PropTypes from 'prop-types';
//importar css
import './styles.css'
const WeatherExtraInfo =({humidity,wind})=>(
	<div className="WeatherExtraInfoCont">
		<span className="extraInfoText">{`Humedad: ${humidity}%`}</span>
		<span className="extraInfoText">{`Vientos: ${wind}`}</span>
	</div>
);

WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,//ptsr
	wind: PropTypes.string,//pts
}

export default WeatherExtraInfo;