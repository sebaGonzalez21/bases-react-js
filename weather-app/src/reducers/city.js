import { SET_CITY } from "../actions";

//reducer
//se realiza una copia de los objetos
export const city = (state = {},action)=>{
	switch(action.type){
		case SET_CITY:
			return action.value;
		default:
			return state;
	}
}