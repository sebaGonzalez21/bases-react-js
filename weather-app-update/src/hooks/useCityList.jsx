import {useState,useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import { getAllWeather } from './../utils/transform/getAllWeather'
const useCityList = (cities) =>{
	/**
	 * All Weather
	 * [Santiago-Chile]: {temperature: 10, state: "sunny"}
	 */
	const [allWeather, setAllWeather] = useState({})
	const [error,setError] = useState(null)

	//invocar las api y llenar los valores
	useEffect(() => {
		const setWeather = async(city,countryCode)=>{
			try{
				const resp = await axios.get(getWeatherUrl({city,countryCode}))
				const allWeatherAux = getAllWeather(resp,city,countryCode)
				setAllWeather(allWeather => ({...allWeather,...allWeatherAux}))
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

		}
		cities.forEach(({city,countryCode}) => {
			//invoca la funcion n veces
			setWeather(city,countryCode)

		});
		
	}, [cities])//cuando cities se modifique,volver a ejecutarlo

	return { allWeather , error , setError }
}

export default useCityList