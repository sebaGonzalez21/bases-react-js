import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';
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


class App extends React.Component {

  //manejo de estados
  //
  constructor(){
    super();
    //constructor del componente siempre
    this.state = {city: null};
  }


  handleSelectionLocation = city =>{
    console.log("handleSelectionLocation",city);
    this.setState({
      city
    })
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
            <LocationList cities={cities}
            onSelectedLocation={this.handleSelectionLocation} />
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

export default App;
