//realizar imports
import {createStore, compose,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise'; //una vez que tiene la resolucion la pinta
import reducers from '../reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,{},composeEnhancers(applyMiddleware(promiseMiddleware)));
