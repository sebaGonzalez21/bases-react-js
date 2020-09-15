import React from 'react';
import { render } from '@testing-library/react';//herramienta que permite hacer renderizado virtual del cmponente
import CityInfo from './CityInfo'; //objeto del testeo

//representa el test,explicacion de lo que se testea
test("CityInfo render", async () =>{
	//expect(true).toBeFalsy()
	//AAA
	//Arrange
	//Act
	//Assert
	const city = "Santiago";
	const country = "Chile";
	//renderiza el componente y retorna serie de funciones
	const { findAllByRole }  = render(<CityInfo city={city}  country={country}/>)//obtener cantidad de componentes por determinado rol
	
	//Assert
	//findAllByRole busca todos los componentes que sean cabeceras
	//resultado es array de componentes, ciudad y pais
	const cityAndCountryComponent = await findAllByRole("heading");

	//validar que los resultados esperados son los obtenidos
	//cuando en el primer elemento se encuentre ciudad "Santiago" y el segundo elemento "Chile"
	expect(cityAndCountryComponent[0]).toHaveTextContent(city)
	expect(cityAndCountryComponent[1]).toHaveTextContent(country)
})