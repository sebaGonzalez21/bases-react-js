import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Alert from '@material-ui/lab/Alert'
import CityInfo from '../CityInfo'
import Weather from '../Weather'


const getCityCode = (city,countryCode) => `${city}-${countryCode}`


//li: item en html para colcar un item de la lista
//render city and country se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = onClickCity => (cityAndCountry,weather) =>{
	const {city,countryCode,country} = cityAndCountry;
	//const {temperature,state} = weather;

	return (
		<ListItem 
			button
			key={getCityCode(city,countryCode)} 
			onClick={onClickCity}>
			<Grid container
				  justify="center"
				  alignItems="center" >
				<Grid item
					  md={9}
					  xs={12}>
					<CityInfo city={city} country={country} />
				</Grid>
				<Grid item
					  md={3}
					  xs={12}>
					<Weather 
							temperature={weather && weather.temperature} 
							state={ weather && weather.state}/>
				</Grid>
			</Grid>
			
		</ListItem>
	)
}



//cities: array y cada item tiene una ciudad pero ademas un country
//ul: tag para listas html no ordenadas
const CityList = ({cities,onClickCity}) => {
	/**
	 * All Weather
	 * [Santiago-Chile]: {temperature: 10, state: "sunny"}
	 */
	const [allWeather, setAllWeather] = useState({})
	const [error,setError] = useState(null)

	//invocar las api y llenar los valores
	useEffect(() => {

		const setWeather = async(city,countryCode)=>{
			const appid = "edcef2cbdd20179bd65a7e334aec06d5"
			//peticion al servidor utilizando fetch
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
			try{
				const resp = await axios.get(url)
				const {data} = resp
				const temperature = convertUnits(data.main.temp).from("K").to("C").toFixed(0)
				const state = data.weather[0].main.toLowerCase()
				const propName = getCityCode(city,countryCode)//[`${city}-${country}`] // ej:  [Santiago-Chile]
				const propValue = {temperature,state} // ej:{temperature: 10, state: "sunny"}
				setAllWeather(allWeather => ({...allWeather, [propName]: propValue}))
			}catch(err){
				//errores que responde el server
				if(err.response){
					setError("Ha ocurrido un error en el servidor del clima")
				//errores que suceden al no llegar al server
				} else if (err.request){
					setError("Verifique la conexion de internet")
				//errores imprevistos
				}else{
					setError("error al cargar los datos")
				}
			}

			/*
			axios
				.get(url)
				.then(resp => {
					const {data} = resp
					const temperature = convertUnits(data.main.temp).from("K").to("C").toFixed(0)
					const state = data.weather[0].main.toLowerCase()
					const propName = [`${city}-${country}`] // ej:  [Santiago-Chile]
					const propValue = {temperature,state} // ej:{temperature: 10, state: "sunny"}
					console.log("propName",propName);
					console.log("propValue",propValue);
					//setea los estados
					//primera vez allweather no tiene nada
					/**
					 * allweather 1 pasada:
					 * {
					 * 		[Santiago-Chile]: {temperature: 10, state: "sunny"}
					 * }
					 * 
					 * allweather 2 pasada:
					 * 
					 * {
					 * 		[Santiago-Chile]: {temperature: 10, state: "sunny"}
					 * 		[Buenos Aires-Argentina]: {temperature: 10, state: "sunny"}
					 * }
					 */
					//set[variableEstado](variableEstado => variableEstado+1) 
					/*
					setAllWeather(allWeather => ({...allWeather, [propName]: propValue}))

					//alert alertas con componente
				}).catch(err =>{
					//errores que responde el server
					if(err.response){
						const {data,status} = err.response
						console.log("data ",data);
						console.log("status ",status);
						setError("Ha ocurrido un error en el servidor del clima")
					//errores que suceden al no llegar al server
					} else if (err.request){
						console.log("server inaccesible - no tengo internet");
						setError("Verifique la conexion de internet")
					//errores imprevistos
					}else{
						console.log("errores imprevistos");
						setError("error al cargar los datos")
					}
					
				})
				*/
		}
		
		cities.forEach(({city,countryCode}) => {
			//invoca la funcion n veces
			setWeather(city,countryCode)

		});
		
	}, [cities])//cuando cities se modifique,volver a ejecutarlo
	return (
		<div>
			{
				error && <Alert severity="error" onClose={()=> setError(null)}>{error}</Alert>
			}
			<List>
			{
				cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
					allWeather[getCityCode(cityAndCountry.city,cityAndCountry.countryCode)]))
			}
			</List>
		</div>
	)
}

CityList.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			city: PropTypes.string.isRequired,
			country: PropTypes.string.isRequired
		})
	),
	onClickCity: PropTypes.func,
}

export default CityList
