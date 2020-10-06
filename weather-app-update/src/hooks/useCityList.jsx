import {useState,useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import { getAllWeather } from './../utils/transform/getAllWeather'
import { getCityCode } from './../utils/utils'

const useCityList = (cities,onSetAllWeather,allWeather) =>{
	/**
	 * All Weather
	 * [Santiago-Chile]: {temperature: 10, state: "sunny"}
	 */
	//const [allWeather, setAllWeather] = useState({})
	const [error,setError] = useState(null)

	//invocar las api y llenar los valores
	useEffect(() => {
		const setWeather = async(city,countryCode)=>{
			try{

				const propName = getCityCode(city,countryCode)
				onSetAllWeather({ [propName]: {} })

				const resp = await axios.get(getWeatherUrl({city,countryCode}))
				const allWeatherAux = getAllWeather(resp,city,countryCode)

				//alguna funcion que lleve el estado al componente superior
				//setAllWeather(allWeather => ({...allWeather,...allWeatherAux}))
				onSetAllWeather(allWeatherAux)
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
			if(!allWeather[getCityCode(city,countryCode)]){
				//invoca la funcion n veces
				setWeather(city,countryCode)
			}

		});
		
	}, [cities,onSetAllWeather,allWeather])//cuando cities se modifique,volver a ejecutarlo // cuando se monte el componente
	//componentes resilientes

	return {  error , setError }
}

export default useCityList