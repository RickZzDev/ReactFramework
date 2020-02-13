import React, {Component} from 'react'
import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries';

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
    
        // Consumindo api
        let lista =  await fetch('http://localhost:3000/series')
        const series = await lista.json()
        // Atualizando o estado da aplicação
        this.setState({lista:series})
        console.log(series)
      }

      enviarDados = async(serie) => {
        console.log(serie)
          const params = {
              method:'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(serie)
              
          }
          try{
            const retorno = await fetch('http://localhost:3000/series', params)
            if(retorno.status === 201){
              serie = await retorno.json()
              this.setState({lista: [...this.state.lista, serie]})
            }
          }catch(erro){
              console.log(erro)
          }

      
      }

      
    deleta = async (id) => {
      const seriesAtual = this.state.lista
      const params = {
          method:'DELETE'
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