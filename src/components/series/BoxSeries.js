import React, {Component} from 'react'
import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries';
import {getToken} from '../../services/authService'

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
        // Este metodo é acionado quando a tela é montada
        const params = {
          headers:{
            Accpept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: getToken()
          }
        }
        // Consumindo api
        let lista =  await fetch('http://localhost:3000/series',params)
        const series = await lista.json()
        // Atualizando o estado da aplicação
        this.setState({lista:series})
        console.log(series)
      }

      enviarDados = async(serie) => {       
        const method = serie.id ? 'PUT' : 'POST'
        
          const params = {
              method:method,
              headers:{
                Accpept: 'application/json',
                'Content-Type': 'application/json',
                authorization: getToken()
              },
              body:JSON.stringify(serie)
              
          }
          const urlParams = serie.id || ''
          try{
            const retorno = await fetch('http://localhost:3000/series/' + urlParams , params)
            serie = await retorno.json()
            if(retorno.status === 201){
             return this.setState({lista: [...this.state.lista, serie],
                serie:this.novaSerie})
            }
            if(retorno.status == 200){
              console.log(this.state.lista.map(s => s.id == serie.id ? serie : s))
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
      const params = {
          method:'DELETE',
          headers:{
            authorization: getToken()
          },
      }
      const retorno = await fetch('http://localhost:3000/series/' + id, params)
      if(retorno.status==204){
        console.log('a')
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