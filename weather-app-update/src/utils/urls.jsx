const appid = "edcef2cbdd20179bd65a7e334aec06d5"
const httpUrl = "https://api.openweathermap.org/data/2.5/"

//peticion al servidor utilizando fetch
export const getWeatherUrl = ({city,countryCode}) => (
	`${httpUrl}weather?q=${city},${countryCode}&appid=${appid}`
);

//peticion al servidor utilizando fetch
export const getForecastUrl= ({city,countryCode}) => (
	`${httpUrl}forecast?q=${city},${countryCode}&appid=${appid}`
)