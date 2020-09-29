import React from 'react'
import PropTypes from 'prop-types'
import Tipography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {IconContext} from 'react-icons';
import IconState,{validValues} from '../IconState'

const ForecastItem = ({weekDay,hour,state,temperature}) => {
	return (
		<Grid container
			  direction="column"
			  justify="center"
			  alignItems="center">
		    <Grid item>
				<Tipography>{weekDay}</Tipography>
			</Grid>
			<Grid item>
				<Tipography>{hour}</Tipography>
			</Grid>
			<Grid item>
				<IconContext.Provider value={{size:'4em'}}> 
					<IconState state={state}/>
				</IconContext.Provider>
			</Grid>
			<Grid item>
				<Tipography>{temperature}°</Tipography>	
			</Grid>
		</Grid>
	)
}

ForecastItem.propTypes = {
	weekDay: PropTypes.string.isRequired,
	hour: PropTypes.number.isRequired,
	state: PropTypes.oneOf(validValues).isRequired,
	temperature: PropTypes.number.isRequired,
}

export default ForecastItem
