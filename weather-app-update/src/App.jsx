import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'
import {WeatherContext} from './WeatherContext'

const App = () => {

	return (
		<WeatherContext>
             <Router>
					<Switch>
						<Route exact path="/">
							<WelcomePage/>
						</Route>
						<Route path="/main">
							<MainPage/>
						</Route>
						<Route path="/city/:countryCode/:city">
							<CityPage/>
						</Route>
						<Route>
							<NotFoundPage/>
						</Route>
					</Switch>
				</Router>
		</WeatherContext>
	)
}

	/*
	const [allWeather, setAllWeather] = useState({})
	const [allChartData, setAllChartData] = useState({})
	const [allForecastItemList, setAllForecastItemList] = useState({})

	const onSetAllWeather = useCallback((weatherCity) =>{
		setAllWeather(allWeather =>({ ...allWeather,...weatherCity }))
	},[setAllWeather])

	const onSetChartData = useCallback((chartDataCity)=>{
		setAllChartData(chartData => ({...chartData,...chartDataCity}))
	},[setAllChartData])

	const onSetForecastItemList = useCallback((forecastItemListCity)=>{
		setAllForecastItemList(forecastItemList => ({...forecastItemList,...forecastItemListCity}))
	},[setAllForecastItemList])

	const actions = useMemo(() =>({
		onSetAllWeather,
		onSetChartData,
		onSetForecastItemList
	}),[onSetAllWeather,onSetChartData,onSetForecastItemList])

	const data = useMemo(() =>({
		allWeather,
		allChartData,
		allForecastItemList
	}),[allWeather,allChartData,allForecastItemList])
	*/
export default App
