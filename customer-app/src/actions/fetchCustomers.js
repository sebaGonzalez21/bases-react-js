import {FETCH_CUSTOMERS} from '../utils/constants';
import { createAction } from 'redux-actions';

export const fetchCustomers = createAction(FETCH_CUSTOMERS);