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

    render(){
        return(
            <div>
                <FormularioSeries enviarDados={this.enviarDados}/>
                <TabelaSeries lista = {this.state.lista}/>
            </div>
        )
    }

}

export default BoxSeries