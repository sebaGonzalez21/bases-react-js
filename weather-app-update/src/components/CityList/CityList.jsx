import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import CityInfo from '../CityInfo';
import Weather from '../Weather'


//li: item en html para colcar un item de la lista
//render city and country se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = onClickCity => cityAndCountry =>{
	const {city,country} = cityAndCountry;
	return (
		<li key={city} onClick={onClickCity}>
			<Grid container
				  justify="center"
				  alignItems="flex-start" >
				<Grid item
					  md={8}
					  xs={12}>
					<CityInfo city={city} country={country} />
				</Grid>
				<Grid item
					  md={4}>
					<Weather temperature={10} state={"sunny"}/>
				</Grid>
			</Grid>
			
		</li>
	)
}

//cities: array y cada item tiene una ciudad pero ademas un country
//ul: tag para listas html no ordenadas
const CityList = ({cities,onClickCity}) => {
	return (
		<ul>
			{
				cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
			}
		</ul>
	)
}

CityList.propTypes = {
	cities: PropTypes.array.isRequired,
	onClickCity: PropTypes.func,
}

export default CityList
