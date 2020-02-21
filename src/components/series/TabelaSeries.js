import React, {Component} from 'react'
import './tabelaSeries.css'
import PubSub from 'pubsub-js'
// Criando sub componentes

const ListaSeries = (props) =>{

        // if(props.series.erro){
        //  return(<h1>{props.lista.erro}</h1>)
        // }

        return(
            <div className="card-body card-body-flex">
                {/* Quando o estado mudar, mudara o que esta
                    atrelado a ela 
                */}
                {
                 props.lista.map(series =>{
                    return (
            
                    <div className="card card-serie bg-dark text-white" key={series.id}>
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
                            <a href="#" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>{
                                PubSub.publish('detail',series)
                            }}>Sinopse</a><br></br>
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

    constructor(){
        super()
        this.state = {
            serieDetalhes:''
        }

        PubSub.subscribe('detail',(msg,serie)=>{
            this.setState({serieDetalhes:serie})
           
        })
    }

    render(){
        const serieDetalhes = this.state.serieDetalhes
        console.log(serieDetalhes)
        const {lista, deleta} = this.props
        return(
            <div className="card bg-dark text-white">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
                </button>

                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-dark">
                        <img src='/logo192.png' className='card-img'/>
                         {serieDetalhes.temporadas > 1
                          ?
                           'temporadas' + serieDetalhes.temporadas 
                           :
                            'temporada' + serieDetalhes.temporadas}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
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