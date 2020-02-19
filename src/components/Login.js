import React, {Component} from 'react'
import './login.css'
class Login extends Component{

    constructor(){
        super()
        this.state = {
            email:'',
            senha:''
        }

    }
    
    inputHandler = (e) =>{
        const {name,value} = e.target
        this.setState({[name]: value})
    }

     signIn = async (e)=>{
        e.preventDefault()
        const {email,senha} = this.state
        const params = {
            method: 'POST',
            headers:{
                Accpept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                senha:senha
            })
        }

        try{
             const retorno = await fetch('https://localhost/3000/auth/autenticar',params)
             const usuario = await retorno.json()
             console.log(usuario)
        }catch(e){
            console.log(e)
        }
    }

    render(){
        return(
            <div className="container">
                    
                <form className="form-signin" onSubmit={this.signIn}>
                    <img className="mb-4 mx-auto d-block" src="/logo192.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email"
                     id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      onChange={this.inputHandler}
                      required
                      autofocus />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password"
                        onChange={this.inputHandler}
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </form>

            </div>
        )
    }

}

export default Login