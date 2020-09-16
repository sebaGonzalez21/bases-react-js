import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { WiCloud,
	WiDayCloudy,
	WiDayFog,
	WiDaySunny,
	WiRain
} from 'react-icons/wi';
import {IconContext} from 'react-icons';


const validValues = [
	"cloud",
	"cloudy",
	"fog",
	"sunny",
	"rain"
]

const stateByName = {
	cloud: WiCloud,
	cloudy: WiDayCloudy,
	fog: WiDayFog,
	sunny: WiDaySunny,
	rain: WiRain
}

const renderState = (state) =>{
	//let Icon = stateByName[state]!==undefined ?  stateByName[state] : stateByName["sunny"];
	let Icon = stateByName[state]
	return <Icon />
}

const Weather = ({temperature,state}) => {
	return (
		<div>
			<IconContext.Provider value={{size:'4em'}}> 
				{renderState(state)}
			</IconContext.Provider>
			<Typography display="inline" variant="h3">{temperature}</Typography>
		</div>
	)
}

Weather.propTypes = {
	temperature: PropTypes.number.isRequired,
	state: PropTypes.oneOf(validValues).isRequired
}

export default Weather
