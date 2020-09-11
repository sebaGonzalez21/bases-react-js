import {combineReducers} from 'redux';
import {customers} from './customers';
import {reducer as reduxForm} from'redux-form';//estados para los formularios
import { CUSTOMER_EDIT, CUSTOMER_LIST, CUSTOMER_VIEW } from '../utils/permissions';

const user = (state,action) =>(
	{
		permissions: [CUSTOMER_LIST,CUSTOMER_VIEW]
	}
)
export default combineReducers({
	customers,
	form: reduxForm,
	user
});

