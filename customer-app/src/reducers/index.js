import {combineReducers} from 'redux';
import {customers} from './customers';
import {reducer as reduxForm} from'redux-form';//estados para los formularios


export default combineReducers({
	customers,
	form: reduxForm
});