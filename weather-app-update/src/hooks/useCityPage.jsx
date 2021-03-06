import {useParams} from 'react-router-dom'
import {useEffect,useDebugValue} from 'react' //useDebugValues Hooks
import axios from 'axios'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForecastItemListAux from '../utils/transform/getForecastItemListAux'
import { getCityCode } from '../utils/utils'

export const useCityPage = (allChartData, allForecastItemList,actions) =>{
	//const [data, setData] = useState(null)
	//const [forecastItemList,setForecastItemList] = useState(null)
	const {city,countryCode} = useParams();
	
	useDebugValue(`useCityPage ${city}`)

	useEffect(() => {
		const getData = async () =>{
		
		const url = getForecastUrl({city,countryCode})
		const cityCode = getCityCode(city,countryCode)
        try{
			const { data } = await axios.get(url)

			const dataAux = getChartData(data)

			//onSetChartData({[cityCode]: dataAux})
			actions({type: 'SET_CHART_DATA', payload: {[cityCode]: dataAux} })
			const foreCastItemListAux = getForecastItemListAux(data)
			
			//onSetForecastItemList({[cityCode]: foreCastItemListAux})
			actions({type: 'SET_FORECAST_ITEM_LIST',payload: {[cityCode]: foreCastItemListAux} })
		 }catch(err){
			 console.log(err)
		 }
		}

		const cityCode = getCityCode(city,countryCode)
		if(allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]){
			getData();
		}
		  
	}, [city,countryCode,actions,allChartData, allForecastItemList])

	return {city,countryCode}
}
