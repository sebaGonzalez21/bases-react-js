import {apiKey,urlBaseForecast} from '../utils/apiUrl';

const getUrlForecastByCity = city =>{
	return  `${urlBaseForecast}?q=${city}&appid=${apiKey}`;
};

export default getUrlForecastByCity;