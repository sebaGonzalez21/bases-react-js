import {apiKey,urlBaseWeather} from '../utils/apiUrl';

const getUrlWeatherByCity = city =>{
	return  `${urlBaseWeather}?q=${city}&appid=${apiKey}`;
};

export default getUrlWeatherByCity;