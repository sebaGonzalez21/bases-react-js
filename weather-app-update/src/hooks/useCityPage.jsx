import {useParams} from 'react-router-dom'
import {useState,useEffect,useDebugValue} from 'react' //useDebugValues Hooks
import axios from 'axios'

import { getForecastUrl } from './../utils/urls'

import getChartData from './../utils/transform/getChartData'
import getForecastItemListAux from '../utils/transform/getForecastItemListAux'

export const useCityPage = () =>{
	const [data, setData] = useState(null)
	const [forecastItemList,setForecastItemList] = useState(null)
	const {city,countryCode} = useParams();
	
	useDebugValue(`useCityPage ${city}`)
	useEffect(() => {
		async function getData() {
        try{
			const { data } = await axios.get(getForecastUrl({city,countryCode}))
			const dataAux = getChartData(data);
			setData(dataAux)
			const foreCastItemListAux = getForecastItemListAux(data)
		    setForecastItemList(foreCastItemListAux)
		 }catch(err){
			 console.log(err);
		 }
		}
		  getData();
	}, [city,countryCode])

	return {city,data,countryCode,forecastItemList}
}
