import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'; //manejo de urls
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

//exact nos entrega la url sin repetirlos
//new lo interpreta como otra url componente exact no sirve para url similares
//Switch envuelve rutas con conflicto, colocar siempre la ruta mas especifica
function App() {

  //const renderHome = () => (<h1>Home</h1>);
  const renderCustomerContainer = () => (<h1>Customer Container</h1>);
  const renderCustomerNewContainer = () => (<h1>Customer New Container</h1>);


  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/customers" component={CustomersContainer}/>
        <Switch>
          <Route path="/customers/new" component={renderCustomerNewContainer}/>
          <Route path="/customers/:dni" component={renderCustomerContainer}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
