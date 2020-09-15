import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo';
import Weather from '../Weather'

//li: item en html para colcar un item de la lista
const renderCityAndCountry = cityAndCountry =>{
	const {city,country} = cityAndCountry;
	return (
		<li key={city}>
			<CityInfo city={city} country={country} />
			<Weather temperature={10} state={"sunny"}/>
		</li>
	)
}

//cities: array y cada item tiene una ciudad pero ademas un country
//ul: tag para listas html no ordenadas
const CityList = ({cities}) => {
	return (
		<ul>
			{
				cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
			}
		</ul>
	)
}

CityList.propTypes = {
	cities: PropTypes.array.isRequired
}

export default CityList
