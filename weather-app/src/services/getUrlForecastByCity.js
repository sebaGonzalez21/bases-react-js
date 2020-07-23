import {apiKey,urlBaseForecast,urlBaseWeather} from '../utils/apiUrl';

export const getUrlForecastByCity = city =>{
	return  `${urlBaseForecast}?q=${city}&appid=${apiKey}`;
};

export const getUrlBaseWeather = city =>{
	return  `${urlBaseWeather}?q=${city}&appid=${apiKey}`;
};
