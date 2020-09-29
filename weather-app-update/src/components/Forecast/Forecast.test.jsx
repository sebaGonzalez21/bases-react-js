import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
	{hour: 18,state:"sunny",temperature:17,weekDay:"Jueves"},
	{hour: 6,state:"cloud",temperature:18,weekDay:"Viernes"},
	{hour: 12,state:"fog",temperature:19,weekDay:"Viernes"},
	{hour: 19,state:"cloudy",temperature:18,weekDay:"Sabado"},
	{hour: 12,state:"rain",temperature:17,weekDay:"Sabado"},
	{hour: 14,state:"rain",temperature:17,weekDay:"Jueves"}
]


test("forecast render",async ()=> {
	//como encontrar los items
	//encontrar cada item de esa marca
	const {findAllByTestId} = render(<Forecast forecastItemList={forecastItemList}/>)
	const forecastItems = await findAllByTestId("forecast-item-container")
	expect(forecastItems).toHaveLength(6)
})