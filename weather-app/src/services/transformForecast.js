import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';
import upperFirstLetter from '../utils/letters';
const transformForecast =(data)=>(
	data.list.filter(item => 
		moment.unix(item.dt).utc().hour() === 6 ||
		moment.unix(item.dt).utc().hour() === 12 ||
		moment.unix(item.dt).utc().hour() === 18
	).map(item=>(
		{
			weekDay: upperFirstLetter(moment.unix(item.dt).format('ddd')),
			hour: moment.unix(item.dt).utc().hour(),
			data: transformWeather(item)
		}
	))
)

export default transformForecast;