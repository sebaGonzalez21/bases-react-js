import React from 'react';
import CityList from './CityList';
import { render, fireEvent } from '@testing-library/react';

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

test("CityList click on item", async () =>{
	//simular accion de un usuario
	const fnClickOnItem = jest.fn()
	const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)
	
	const items = await findAllByRole("listitem")

	//simular accion fireevent
	//firevent
	//obtener primer item
	fireEvent.click(items[0])

	//se debio llamar la funcion on click una vez
	expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})