import {SET_FORECAST_DATA} from '../actions';

//permite tomar diferentes reducers
export const cities = (state = {},action)=>{
	switch(action.type){
		case SET_FORECAST_DATA:
			const {city,forecastData} = action.value;
			return {...state,[city]: {forecastData}};
		default:
			return state;
	}
};

export const getForecastDataFromCities = (state,city)=> {
	return state[city] && state[city].forecastData
};