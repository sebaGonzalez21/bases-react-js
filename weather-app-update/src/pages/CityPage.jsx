import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
const CityPage = props => {
	const country = "Chile"
	const city = "Santiago"
	const state = "cloudy"
	const temperature = 12
	const humidity = 80
	const wind = 5

	const data =[
		{
			"dayHour": "Jue 18",
			"min": 14,
			"max": 22
		},
		{
			"dayHour": "Vie 6",
			"min": 18,
			"max": 27
		},
		{
			"dayHour": "Vie 12",
			"min": 18,
			"max": 28
		},
		{
			"dayHour": "Vie 18",
			"min": 18,
			"max": 25
		},
		{
			"dayHour": "Sab 06",
			"min": 15,
			"max": 22
		},
		{
			"dayHour": "Sab 12",
			"min": 12,
			"max": 19
		},
	]

	const forecastItemList = [
		{hour: 18,state:"sunny",temperature:17,weekDay:"Jueves"},
		{hour: 6,state:"cloud",temperature:18,weekDay:"Viernes"},
		{hour: 12,state:"fog",temperature:19,weekDay:"Viernes"},
		{hour: 19,state:"cloudy",temperature:18,weekDay:"Sabado"},
		{hour: 12,state:"rain",temperature:17,weekDay:"Sabado"},
		{hour: 14,state:"rain",temperature:17,weekDay:"Jueves"}
	]
	return (
		<AppFrame>
			<Grid container
			  justify="space-around"
			  direction="column"
			  spacing={2}>
				<Grid item container 
					xs={12}
					justify="center"
					alignItems="flex-end">
					<CityInfo city={city} country={country}> </CityInfo>
				</Grid>
				<Grid container item xs={12} 
					justify="center">
						<Weather state={state} temperature={temperature}/>
						<WeatherDetails humidity={humidity} wind={wind}/>
				</Grid>
				<Grid item>
					<ForecastChart data={data}/>
				</Grid>
				<Grid item>
					<Forecast forecastItemList={forecastItemList}/>
				</Grid>
			</Grid>
		</AppFrame>
		
	)
}

export default CityPage
