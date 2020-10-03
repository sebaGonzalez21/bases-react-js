import React from 'react'
import {useHistory} from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper' //marco al final
import CityList from './../components/CityList'

const cities = [
	{
		city: "Santiago",
		country: "Chile"
	},
	{
		city: "Buenos Aires",
		country: "Argentina"
	}
];

const MainPage = props => {
	const history = useHistory()

	const onClickHandler = () =>{
		//url que mostrara el navegador
		history.push("/city");
	}

	return (
		<AppFrame>
			<Paper>
				<CityList 
					cities={cities}
					onClickCity={onClickHandler}/>
			</Paper>
		</AppFrame>
	)
}

export default MainPage
