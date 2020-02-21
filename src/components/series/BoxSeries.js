import React, {Component} from 'react'
import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries';
import {getToken} from '../../services/authService'
import {inserir, listar, atualizar, remover} from '../../services/serviceSeries'
// Este componente tem como função ligar os componentes
// E fazer as requissições necessarias com a api
class BoxSeries extends Component{

    constructor(){
        //Chamando construtor do pai
        super()
        this.state = {
          lista:[]
        }
      }

      async componentDidMount(){
        try{
          const retorno = await listar()
          const series = await retorno.json()
          // Atualizando o estado da aplicação
          this.setState({lista:series})
        }catch(erro){
          console.log(erro)
        }


      }

      enviarDados = async(serie) => { 
        try{
          let retorno = ''
          if(serie.id) retorno = await atualizar(serie)
          else retorno = await inserir(serie)
          serie = await retorno.json()
          if(retorno.status === 201){
            return this.setState({lista: [...this.state.lista, serie],
              serie:this.novaSerie})
          }
          if(retorno.status == 200){
            return this.setState({
              lista: this.state.lista.map(s => s.id == serie.id ? serie : s),
              serie: this.novaSerie
            })
          }

          
        }catch(erro){
          console.log(erro)
        }
      }

      
    deleta = async (id) => {
      const seriesAtual = this.state.lista
      const retorno = await remover(id)
      if(retorno.status==204){
          this.setState({
            lista: seriesAtual.filter((serie)=>{
              return serie.id != id
            })
          })
      }
   
  }

    render(){
        return(
            <div className="container">
              <div className="row">
                <div className="col-md-4"> 
                  <FormularioSeries enviarDados={this.enviarDados}/>
                </div>
                <div className="col-md-8">
                  <TabelaSeries lista = {this.state.lista} deleta={this.deleta}/>
                </div>
              </div>
            </div>
        )
    }

}

export default BoxSeries