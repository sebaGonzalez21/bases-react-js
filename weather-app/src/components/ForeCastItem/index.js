import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css'
import WeatherData from '../WeatherLocation/WeatherData'

const ForeCastItem = ({weekDay,hour,data}) =>(
	<div className="forecast-item-container">
		<div className="forecast-item">{weekDay} - {hour} hrs</div>
		<WeatherData data={data}/>
	</div>
	
);

ForeCastItem.propTypes ={
	weekDay: PropTypes.string.isRequired,
	hour: PropTypes.number.isRequired,
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	})
}
export default ForeCastItem;