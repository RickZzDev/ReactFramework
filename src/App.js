import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Routes from './routes/routes' 



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
        <Routes/>
    );
  }

}


export default App;
