import React, { Component } from 'react';

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
        this.state = this.stateInicial
      }
    
    render(){
        return(
            <div>
                <form method="POST" onSubmit={this.enviaDados}>
                    <div className="form">
                        <label htmlFor='nome'>Nome</label>
                        <input type="text" id="nome" name="nome" value={this.state.nome} onChange={this.inputHandler}/>
                        <label htmlFor='ano_lanc'>Ano de lançamento</label>
                        <input type="text" id="ano_lanc" name="ano_lancamento" onChange={this.inputHandler} value={this.state.ano_lancamento}   />
                        <label htmlFor='temp'>Temporadas</label>
                        <input type="text" id="temps" name="temporadas" value={this.state.temporadas} onChange={this.inputHandler}/>
                        <label htmlFor='Sinopse'>Sinopse</label>
                        <textarea id="sinopse" name="sinopse" onChange={this.inputHandler} value={this.state.sinopse}>  </textarea>
                        <button type="submit" >Salvar</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default FormulariosSeries