import React from 'react';
import CityList from './CityList';
import { render } from '@testing-library/react';

const cities = [
	{
		city: "Santiago",
		country: "Chile"
	},
	{
		city: "Buenos Aires",
		country: "Argentina"
	}
]

test("CityList renders", async ()=>{
	//AAA Arrenge Act Assert
	const { findAllByRole } = render(<CityList cities={cities}/>) 
	const items = await findAllByRole("listitem")
	expect(items).toHaveLength(2);
})