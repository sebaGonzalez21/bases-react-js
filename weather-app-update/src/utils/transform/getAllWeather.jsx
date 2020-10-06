import { getCityCode, toCelsius} from './../../utils/utils'
//import {validValues} from '../../components/IconState'

export const getAllWeather = (resp,city,countryCode) =>{
	const {data} = resp
	const temperature = toCelsius(data.main.temp)
	const humidity = data.main.humidity
	const wind = data.wind.speed
	const state = data.weather[0].main.toLowerCase()
	
	const propName = getCityCode(city,countryCode)//[`${city}-${country}`] // ej:  [Santiago-Chile]
	const propValue = {temperature,state,humidity,wind} // ej:{temperature: 10, state: "sunny"}
	return ({ [propName]: propValue})
}