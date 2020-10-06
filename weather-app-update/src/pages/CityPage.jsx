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

const CityPage = ({actions,data}) => {
	const { allWeather, allChartData, allForecastItemList} = data
	const { onSetAllWeather,onSetChartData, onSetForecastItemList} = actions
	const {city,countryCode} = useCityPage(allChartData, allForecastItemList,onSetChartData,onSetForecastItemList)//use memo
	
	const cities = useMemo(() =>( [{city ,countryCode}]), [city,countryCode]);//cuando cambie city and country code retornar un nuevo array
	
	useCityList(cities,onSetAllWeather,allWeather)
	
	const cityCode = getCityCode(city ,countryCode)

	const weather = allWeather[cityCode]
	const chartData = allChartData[cityCode]
	const forecastItemList = allForecastItemList[cityCode]
	

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
						!chartData && !forecastItemList && <LinearProgress />
					}
				</Grid>
				<Grid item>
					{
						chartData && <ForecastChart data={chartData}/>
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
