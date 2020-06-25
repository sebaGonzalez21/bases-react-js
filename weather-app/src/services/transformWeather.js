import convert from 'convert-units';
import {
	CLOUDY,
	SUN,
	SNOW,
	RAIN,
	THUNDER,
	DRIZZLE
} from '../utils/weather';

	const getTemp = (kelvin)=>{
		return Number(convert(kelvin).from("K").to("C").toFixed(0));
	}

	const getWeatherState = (weather) =>{
		const {id} = weather;
		if(id<300){
			return THUNDER;
		}else if(id<400){
			return DRIZZLE;
		}
		else if(id<600){
			return RAIN;
		}
		else if(id<700){
			return SNOW;
		}else if(id === 800){
			return SUN;
		}else{
			return CLOUDY;
		}
	}
	
	//utilizar this para llamarlo
	const transformWeather = (Weather_data) =>{
		//object literal property
		const {humidity,temp} = Weather_data.main;
		const {speed} = Weather_data.wind;
		const weatherState = getWeatherState(Weather_data.weather[0]);
		const temperature =getTemp(temp);
		const data = {
			temperature,
			weatherState,
			humidity,
			wind: `${speed} m/s`
		}
		return data;
	};

	export default transformWeather;
