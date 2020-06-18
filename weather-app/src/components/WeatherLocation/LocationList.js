import React from 'react';
import WeatherLocation from './index';

const LocationList = () =>(
	<div>
		<WeatherLocation city="Santiago,cl"/>
		<WeatherLocation city="Bogota,col"/>
		<WeatherLocation city="Mexico,mex"/>
	</div>
);

export default LocationList;