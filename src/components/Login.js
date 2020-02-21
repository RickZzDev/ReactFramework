import React, {Component} from 'react'
import './login.css'
import {signIn} from '../services/authService'

const MsgErro = (props) =>{
    return props.mensagem
    ?
    (
        <div className="alert alert-danger">
            {props.mensagem}
        </div>
    )
    :
    ('')

        
    }



class Login extends Component{

    constructor(){
        super()
        this.state = {
            email:'',
            senha:'',
            msgErro:''
        }

    }
    
    inputHandler = (e) =>{
        const {name,value} = e.target
        this.setState({[name]: value})
    }

     signIn = async (e)=>{
         try{
            e.preventDefault()
            const usuario = this.state
            delete usuario.MsgErro
            const retorno = await signIn(usuario)
            if(retorno.status == 400){
                const erro = await retorno.json()
                return this.setState({msgErro: erro.erro})
            }
        
            if(retorno.ok){
                this.props.history.push('/')
            }     
            //  console.log(usuario)
         }catch(erro){
            console.log(erro)
         }

        
    }

    render(){
        return(
            <div className="container">
                 <div className="body">   
                    <form className="form-signin" onSubmit={this.signIn}>
                        <MsgErro mensagem={this.state.msgErro}></MsgErro>
                        <img className="mb-4 mx-auto d-block" src="/logo192.png" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email address"
                        onChange={this.inputHandler}
                        required
                        autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password"
                            onChange={this.inputHandler}
                            name="senha"
                            id="senha"
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
            </div>
        )
    }

}

export default Login