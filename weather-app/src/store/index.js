import {createStore} from 'redux';//estado de la aplicacion
//reducer como parametro, funcion
export const store = createStore(()=>{},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);//para asociarla a la extension

