import React,{ useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
import { useCityPage } from './../hooks/useCityPage'
import LinearProgress from '@material-ui/core/LinearProgress'
import useCityList from '../hooks/useCityList'
import { getCityCode } from './../utils/utils'
import {getCountryNameByCountryCode} from './../utils/serviceCities'

const CityPage = () => {

	const {city,countryCode,data,forecastItemList} = useCityPage()//use memo
	const cities = useMemo(() =>( [{city ,countryCode}]), [city,countryCode]);//cuando cambie city and country code retornar un nuevo array
	const { allWeather } = useCityList(cities)
	const weather = allWeather[getCityCode(city ,countryCode)]
	const country = getCountryNameByCountryCode(countryCode)
	const state = weather && weather.state
	const temperature = weather && weather.temperature
	const humidity = weather && weather.humidity
	const wind = weather && weather.wind

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
						{
							humidity && wind && 
							<WeatherDetails humidity={humidity} wind={wind}/>
						}
				</Grid>
				<Grid item>
					{
						!data && !forecastItemList && <LinearProgress />
					}
				</Grid>
				<Grid item>
					{
						data && <ForecastChart data={data}/>
					}
				</Grid>
				<Grid item>
					{
						forecastItemList && <Forecast forecastItemList={forecastItemList}/>
					}
				</Grid>
			</Grid>
		</AppFrame>
		
	)
}

export default CityPage
