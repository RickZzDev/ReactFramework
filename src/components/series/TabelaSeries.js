import React, {Component} from 'react'

// Criando sub componentes
const TabelHead = ()=>{
    return(
        <thead>
            <tr>
            <th>
                Nome
            </th>
            <th>
                Ano 
            </th>
            <th>
                Temporadas
            </th>
            <th>
                Sinopse
            </th>
            </tr>
        </thead>
    )
}

const TabelBody = (props) =>{
        return(
            <tbody>
                {/* Quando o estado mudar, mudara o que esta
                    atrelado a ela 
                */}
                {
                 props.lista.map(series =>{
                    return (
                    <tr key={series.id}>
                        <td>{series.nome}</td>
                        <td>{series.ano_lancamento}</td>
                        <td>{series.temporadas}</td>
                        <td>{series.sinopse}</td>
                    </tr>
                    )
                    
                })}

            </tbody>
        )
}

class TabelasSeries extends Component{
    render(){
        const {lista} = this.props
        return(
            <div className="list">
                {/* Receendo propriedades de um elemento pai */}
            
            <table>
                <TabelHead/>
                <TabelBody lista = {lista}/>
            </table>
          </div>
        )
    }
}

export default TabelasSeries