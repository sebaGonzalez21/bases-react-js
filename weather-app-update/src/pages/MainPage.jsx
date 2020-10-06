import React from 'react'
import {useHistory} from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper' //marco al final
import CityList from './../components/CityList'
import { getCities } from '../utils/serviceCities'

const MainPage = ({actions,data}) => {
	const history = useHistory()

	const onClickHandler = (city,countryCode) =>{
		/*)
		console.log("city ",city);
		console.log("countryCode ",countryCode);
		//url que mostrara el navegador*/
		history.push(`/city/${countryCode}/${city}`);

	}

	return (
		<AppFrame>
			<Paper>
				<CityList 
					data={data}
					actions={actions}
					cities={getCities()}
					onClickCity={onClickHandler}/>
			</Paper>
		</AppFrame>
	)
}

export default MainPage
