import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'; //manejo de urls
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

//exact nos entrega la url sin repetirlos
//new lo interpreta como otra url componente exact no sirve para url similares
//Switch envuelve rutas con conflicto, colocar siempre la ruta mas especifica
function App() {

  //const renderHome = () => (<h1>Home</h1>);
  //const renderCustomerNewContainer = () => (<h1>Customer New Container</h1>);

  //render envia parametros
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/customers" component={CustomersContainer}/>
        <Switch>
          <Route path="/customers/new" component={NewCustomerContainer}/>
          <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
