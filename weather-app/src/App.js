import React from 'react';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/WeatherLocation/ForecastExtended'
import { Paper,AppBar,Typography,Toolbar } from '@material-ui/core';//sombra,BarraNavegacion,manejarTipografia,
import { Grid, Row, Col } from 'react-flexbox-grid';

const cities = [
  "London,gb",
  "Santiago,cl",
  "Ciudad de Mexico,mex",
  "Madrid,es",
  "Lima,pe"
];

/*
const setCity = (value)=>({
    type: 'setCity', value

});*/

class App extends React.Component {

  //manejo de estados
  //
  constructor(){
    super();
    //constructor del componente siempre
    this.state = {city: null};
  }


  render(){
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
                { city && 
                  <ForecastExtended city={city}/>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
      /*
     <MuiThemeProvider>
       <Grid item xs={4}>
            <Row>
              <h1>Grid System xs,sm,md,lg</h1>
            </Row>
          </Grid>
          <Grid item xs={4}>
            <Row>
            <h1>Las columnas se muestran en la misma fila sumen 12</h1>
            </Row>
          </Grid>
          <Grid item xs={4}>
            <Row>
              <Col  xs={2}>
                <div className="red"></div>
              </Col>
  
              <Col xs={2}>
                <div className="red"></div>
              </Col>
  
              <Col xs={2}>
                <div className="green"></div>
              </Col>
  
              <Col xs={2}>
                <div className="blue"></div>
              </Col>
            </Row>
          </Grid>
     </MuiThemeProvider>*/
    );
  }
};


//connect recibe 2 funciones,espera que se le pase el componente, se retorna el componente con habilidad de conectarse, componente mejorado con las propiedades
export default (App);


