import React from 'react';
import Weather from './Weather';

export default {
	title: "Weather",
	component: Weather
}

export const Template = (args) => <Weather {...args}/>

export const WeatherCloud = Template.bind({})//bind funcion de stories
WeatherCloud.args = { temperature:10, state:"clouds"}
//() => <Weather temperature={10} state={"clouds"}/>

export const WeatherSunny = Template.bind({})//bind funcion de stories
WeatherSunny.args = { temperature:10, state:"clear"}
//() => <Weather temperature={10} state={"clear"}/>