import React,{Component} from 'react'; //importar react para trabajar con react dentro del archivo
import Location from './Location';
import WeatherData from '../WeatherData';
import icons from '../../utils/constant';
import './styles.css'
const data = {
	temperature: 5,
	weatherState: icons.sun,
	humidity: 10,
	wind: '10 m/s'
}

const data2 = {
	temperature: 15,
	weatherState: icons.snow,
	humidity: 20,
	wind: '20 m/s'
}




//componente de tipo clase
//cuando se necesita utilizar alguna instancia es necesario utilizarlo
class WeatherLocation extends Component {
	//states, estado de componentes tipo clase
	constructor(){
		super();//desde donde extiende el componente
		//estado parcial del componente para ayudar a que se renderice
		this.state = {
			city: "Santiago",
			data: data
		}
	}
	
	//utilizar this para llamarlo
	handleUpdateClick = () =>{
		//modificacion de estados para cuando se modifica
		this.setState({
			city: "Santiago!",
			data: data2
		});
	};

	render(){
		//dentro del render llamada de objetos
		const {city,data } = this.state;
		return (
			<div className="weatherLocationCont">
				<Location city={city}></Location>
				<WeatherData data={data}></WeatherData>
				<button onClick={this.handleUpdateClick}>Actualizar</button>
			</div>
		);
	}
}

export default WeatherLocation;//el componente se indica que estara disponible para invocarlo