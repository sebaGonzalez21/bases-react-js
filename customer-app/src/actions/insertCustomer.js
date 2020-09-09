import {INSERT_CUSTOMERS} from '../utils/constants';
import { createAction } from 'redux-actions';
import { apiPost } from '../api';
import { urlCustomers } from '../api/urls';

export const insertCustomer = createAction(INSERT_CUSTOMERS,
	(customer) =>  apiPost(urlCustomers,customer) () );