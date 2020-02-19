import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxSeries from './components/series/BoxSeries'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './components/NavBar'
import Home from './components/Home'
import Autores from './components/Autores'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

const NotFound = () =>{
  return(
    <div>
        <h1>Not Found</h1>
    </div>
  )
}

class App extends Component{



  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/autores" component={Autores} />
            <Route path="/series" component={BoxSeries} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound}/>   
          </Switch>
        </div>
      </Router>
    );
  }

}


export default App;
