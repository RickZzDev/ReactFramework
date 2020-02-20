import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import {signOut} from '../services/authService'

class Navbar extends Component{

  constructor(){
    super()
    this.state = {
      signOut: false
    }
  }

  signOut = (e) =>{
      signOut()
      this.setState({signOut:true})
  }

    render(){

      if(this.state.signOut){
        return <Redirect to='/login' />
      }
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/series">Series <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/autores">Autores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                </li>
              </ul>
              <button className="btn btn-outline-danger my-2  my-sm-0 " type="submit" onClick={this.signOut} >Sair</button>
            </div>
          </nav>
        )
    }

}


export default Navbar