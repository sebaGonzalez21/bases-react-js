import {createStore,applyMiddleware,compose} from 'redux';//estado de la aplicacion
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialState = {
  city: 'Santiago,cl'
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//reducer como parametro, funcion
export const store = createStore(reducers,initialState,composeEnhancers(applyMiddleware(thunk))
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);//para asociarla a la extension

