import convert from 'convert-units';
import icons from '../utils/constant';

	const getTemp = (kelvin)=>{
		return Number(convert(kelvin).from("K").to("C").toFixed(2));
	}

	const getWeatherState = (weather_data) =>{
		return icons.sun;
	}
	
	//utilizar this para llamarlo
	const transformWeather = (Weather_data) =>{
		//object literal property
		const {humidity,temp} = Weather_data.main;
		const {speed} = Weather_data.wind;
		const weatherState = getWeatherState(Weather_data);
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
