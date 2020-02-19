import React, {Component} from 'react'
import './tabelaSeries.css'
import PubSub from 'pubsub-js'
// Criando sub componentes

const ListaSeries = (props) =>{



        return(
            <div className="card-body card-body-flex">
                {/* Quando o estado mudar, mudara o que esta
                    atrelado a ela 
                */}
                {
                 props.lista.map(series =>{
                    return (
            
                    <div className="card card-serie" key={series.id}>
                        <div className="card-header">
                            <h5 className="card-title">{series.nome}</h5>
                            <h6 className="card-title mb-0">{series.ano_lancamento}</h6>
                        </div>
                        <div className="card-body">
                            <img src="/logo192.png" className="card-img"/>
                        </div>
                        <div className="card-footer">
                            {series.temporadas}
                            {series.temporadas > 1 ? ' temporadas' : ' temporada'}
                            <br></br>
                            <a href="#">Sinopse</a><br></br>
                            <div className="text-center mt-1">
                                <button  className="btn btn-outline-danger btn-sm mr-2" onClick={()=>{
                                    if(window.confirm('Deseja excluir?'))
                                        props.deleta(series.id)
                                }}>
                                        Delete
                                    </button>
                                <button
                                 onClick={()=>{
                                     PubSub.publish('editing',series)
                                 }}
                                 className="btn btn-outline-warning btn-sm">
                                     Editar
                                </button>
                            </div>
                        </div>
                    </div>
                    )
                    
                })}

            </div>
        )
}

class TabelasSeries extends Component{


    render(){
        const {lista, deleta} = this.props
        return(
            <div className="card">
                {/* Receendo propriedades de um elemento pai */}
                <div className="card-header">
                    <h5 className="text-center">Lista de series</h5>
                </div>
                <div className="card-body card-body-flex">
                    <ListaSeries lista={lista} deleta={deleta}/>
                </div>
          </div>
        )
    }
}

export default TabelasSeries