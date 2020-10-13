import React from 'react';
import CityInfo from './CityInfo';
import 'fontsource-roboto';
// a que componente se le esta generando la historia
export default {
	title: "CityInfo", //nombre del componente
	component: CityInfo, //componente asociado, item de story boook
	argTypes:{
		city: {control: {type: "text"}},
		country: {control: {type: "text"}}
	}
}

//utilizando como mecanica de componentes
export const CityExample = (args) => <CityInfo {...args}/>

CityExample.args = { city: "Santiago", country: "Chile"}