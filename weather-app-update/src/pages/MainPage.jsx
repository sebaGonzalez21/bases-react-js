import React from 'react'
import {useHistory} from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper' //marco al final
import CityList from './../components/CityList'


const cities = [
	{
		city: "Santiago",
		country: "Chile",
		countryCode: "CL"
	},
	{
		city: "Buenos Aires",
		country: "Argentina",
		countryCode: "AR"
	},
	{
		city: "Bogotá",
		country: "Colombia",
		countryCode: "CO"
	},
	{
		city: "Madrid",
		country: "España",
		countryCode: "ES"
	}
];

const MainPage = props => {
	const history = useHistory()

	const onClickHandler = (city,countryCode) =>{
		console.log("city ",city);
		console.log("countryCode ",countryCode);
		//url que mostrara el navegador
		history.push(`/city/${countryCode}/${city}`);

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
