import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxSeries from './components/series/BoxSeries'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './components/NavBar'

class App extends Component{



  render() {
    return (
      
      <div className="App">
        <Navbar></Navbar>
        {/* Chamando componentes */}
        <BoxSeries/>
      </div>
    );
  }

}


export default App;
