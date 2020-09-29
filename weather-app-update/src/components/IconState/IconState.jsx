import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud,
	WiDayCloudy,
	WiDayFog,
	WiDaySunny,
	WiRain
} from 'react-icons/wi';

export const validValues = [
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

/*
const renderState = (state) =>{
	//let Icon = stateByName[state]!==undefined ?  stateByName[state] : stateByName["sunny"];
	let Icon = stateByName[state]
	return <Icon />
}*/

const IconState = ({state}) => {
	const StateByName = stateByName[state];
	return (
		<StateByName/>
	)
}

IconState.propTypes = {
	state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
