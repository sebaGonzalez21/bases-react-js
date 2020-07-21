import getUrlForecastByCity from '../services/getUrlForecastByCity';
import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA= 'SET_FORECAST_DATA';
export const setCity = (value)=>({
    type: SET_CITY, value
});
export const setForecastData = value =>({
	type: SET_FORECAST_DATA,value
});

export const setSelectedCity = value =>{
    return dispatch =>{
		
        const urlForecast = getUrlForecastByCity(value);
		
		//activar estado indicador de busqueda de datos
		dispatch(setCity(value));
		
		//ejecutar busqueda
		return fetch(urlForecast)
		.then( data => data.json())
		.then(weather_data=>{
			const forecastData = transformForecast(weather_data);
			console.log(forecastData);
			//modificar el estado con el resultado de la promise(fetch)
			dispatch(setForecastData({city: value,forecastData}));
		})
		.catch(err=>{
			console.log(err);
			return err;
		});
    }
};