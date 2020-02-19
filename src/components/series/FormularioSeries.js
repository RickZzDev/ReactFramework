import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class FormulariosSeries extends Component{

    constructor(){
        super()
        this.stateInicial={

            nome:'',
            ano_lancamento:'',
            temporadas:'',
            sinopse:''
        }

        this.state = this.stateInicial

        PubSub.subscribe('editing',(msg,serie)=>{
            this.setState(serie)
        })
    }

    inputHandler = (e)=>{
        // Buscando asd chaves dentro do json
        const {name, value} = e.target
        // Setando a variaval name com o value
        this.setState({[name]: value})
    
    
      }
    
      enviaDados = (e)=>{
        e.preventDefault()
        this.props.enviarDados(this.state)
        this.setState(this.stateInicial)
      }
    
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro Series
                </div>
                <div className="card-body">
                    <form method="POST" onSubmit={this.enviaDados}>
                        <div className="form-group">
                            <label htmlFor='nome'>Nome</label>
                            <input type="text" id="nome" className="form-control" name="nome" value={this.state.nome} onChange={this.inputHandler}/>
                            <label htmlFor='ano_lanc'>Ano de lançamento</label>
                            <input type="text" className="form-control" id="ano_lanc" name="ano_lancamento" onChange={this.inputHandler} value={this.state.ano_lancamento}   />
                            <label htmlFor='temp'>Temporadas</label>
                            <input type="text" className="form-control" id="temps" name="temporadas" value={this.state.temporadas} onChange={this.inputHandler}/>
                            <label htmlFor='Sinopse'>Sinopse</label>
                            <textarea id="sinopse" className="form-control" name="sinopse" onChange={this.inputHandler} value={this.state.sinopse}>  </textarea>
                            <button type="submit" className="btn btn-success form-control mt-2" >Salvar</button>
                        </div>
                    </form>                
                </div>
            </div>
        )
    }

}

export default FormulariosSeries