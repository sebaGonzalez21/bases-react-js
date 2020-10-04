import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
	{hour: 18,state:"clear",temperature:17,weekDay:"Jueves"},
	{hour: 6,state:"clouds",temperature:18,weekDay:"Viernes"},
	{hour: 12,state:"drizzle",temperature:19,weekDay:"Viernes"},
	{hour: 19,state:"clouds",temperature:18,weekDay:"Sabado"},
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