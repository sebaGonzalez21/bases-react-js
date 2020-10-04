import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
import { useCityPage } from './../hooks/useCityPage'

const CityPage = (props) => {
	const country = "Chile"
	const state = "clouds"
	const temperature = 12
	const humidity = 80
	const wind = 5
	const {city,data,forecastItemList} = useCityPage()
	
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
						<Weather state={state} temperature={temperature.toString()}/>
						<WeatherDetails humidity={humidity} wind={wind}/>
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
