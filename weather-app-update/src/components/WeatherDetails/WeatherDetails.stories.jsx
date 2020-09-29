import React from 'react'
import WeatherDetails from './WeatherDetails'

export default {
	title: "WeatherDetails",
	component: WeatherDetails
}

export const WeatherDetailExample = () => <WeatherDetails humidity={10} wind={10}/>