import React from 'react'
import CityList from './CityList';

export default {
	title: "City List",
	component: CityList
}

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

export const CityListExample = () => <CityList cities={cities}/>