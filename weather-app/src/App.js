import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

function App() {
  return (
    <div className="App">
      <LocationList city={"Santiago,cl"}/>
    </div>
  );
};

export default App;
