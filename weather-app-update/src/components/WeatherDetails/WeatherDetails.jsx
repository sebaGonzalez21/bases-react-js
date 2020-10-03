import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const WeatherDetails = ({humidity,wind}) => {
	return (
		<>
			<Typography  variant="h4">Humedad: {humidity}%</Typography>
			<Typography  variant="h4">Viento: {wind} km/h</Typography>
		</>
	)
}

WeatherDetails.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.number.isRequired,
}

export default WeatherDetails
