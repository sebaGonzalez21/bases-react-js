import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';//espera una propiedad store, provee al store los componentes que viven en la app
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './stores';//redux abstrae utilizacion del store
//ya funciona react redux junto con la aplicacion,
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
