import {getUrlForecastByCity,getUrlBaseWeather} from '../services/getUrlForecastByCity';
import transformForecast from '../services/transformForecast';
import transformWeather from '../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA= 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY= 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY= 'SET_WEATHER_CITY';

const setCity = (value)=>({
    type: SET_CITY, value
});
const setForecastData = value =>({
	type: SET_FORECAST_DATA,value
});

const setWeatherCity = value =>({
	type: SET_WEATHER_CITY,value
});

const getWeatherCity = value =>({
	type: GET_WEATHER_CITY,value
});

export const setSelectedCity = (city) =>{
    return (dispatch, getState) =>{
        const urlForecast = getUrlForecastByCity(city);
		//activar estado indicador de busqueda de datos
		dispatch(setCity(city));
		
		const state = getState();
		const date = state.cities[city] && state.cities[city].forecastDataDate;
		const now = new Date();
		
		if(date && (now - date) < 1*60*1000){
			return;
		}
		//ejecutar busqueda
		return fetch(urlForecast)
		.then( data => data.json())
		.then(weather_data=>{
			const forecastData = transformForecast(weather_data);
			//modificar el estado con el resultado de la promise(fetch)
			dispatch(setForecastData({city,forecastData}));
		})
		.catch(err=>{
			console.log(err);
			return err;
		});
    }
};

export const setSelectedWeather = value => {
	return dispatch =>{
		value.forEach(city => {
		dispatch(getWeatherCity(city));
		const urlWeather = getUrlBaseWeather(city);
		//ejecutar busqueda
		fetch(urlWeather)
		.then( data => data.json())
		.then(weather_data=>{
			const weather = transformWeather(weather_data);
			//modificar el estado con el resultado de la promise(fetch)
			dispatch(setWeatherCity({city,weather}));
		})
		.catch(err=>{
			console.log(err);
			return err;
		});
	}); 
    }
}