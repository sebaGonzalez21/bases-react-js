import {useParams} from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/es'
import convertUnits from 'convert-units'
import { getForecastUrl } from './../utils/urls'

export const useCityPage = () =>{
	const [data, setData] = useState(null)
	const [forecastItemList,setForecastItemList] = useState(null)
	const {city,countryCode} = useParams();
	
	useEffect(() => {
		async function getData() {
        try{
			const { data } = await axios.get(getForecastUrl({city,countryCode}))
			console.log(data);
			const daysAhead = [0,1,2,3,4,5]
			const toCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))

			const days = daysAhead.map(d => moment().add(d,'d'))
			const dataAux = days.map(day=>{
				const tempObjArray = data.list.filter(item =>{
					const dayOfYear = moment.unix(item.dt).dayOfYear()
					return day.dayOfYear() === dayOfYear
				})
			  const temps = tempObjArray.map(item => item.main.temp)
			  return ({
				dayHour: day.format('ddd'),
				min: toCelsius(Math.min(...temps)),
				max: toCelsius(Math.max(...temps)),
				hasTemps: temps.length > 0 ? true : false
			  })
			}).filter(item => item.hasTemps)

			setData(dataAux)

			const interval = [4,8,12,16,20,24]
			const foreCastListAux = data.list
			.filter((item,index) => interval.includes(index))
			.map(item =>{
				return ({
					hour: moment.unix(item.dt).hour(),
					weekDay: moment.unix(item.dt).format('ddd'),
					state: item.weather[0].main.toLowerCase(),
					temperature: toCelsius(item.main.temp)
				})
			})
		    setForecastItemList(foreCastListAux)
		 }catch(err){
			 console.log(err);
		 }
		}
		  getData();
	}, [city,countryCode])

	return {city,data,forecastItemList}
}
