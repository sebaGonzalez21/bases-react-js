import React from 'react';
import { render } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';

test("WeatherDetails render", async() =>{
	const humidity = 10;
	const wind = 80;

	const {findByText} = render(<WeatherDetails humidity={humidity} wind={wind}/>)

	const humidityText = await findByText(/10/)
	const windText = await findByText(/80/)


	expect(windText).toHaveTextContent("Viento: 80 km/h")
	expect(humidityText).toHaveTextContent("Humedad: 10%")
	
})