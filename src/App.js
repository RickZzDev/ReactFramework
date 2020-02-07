import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    //Chamando construtor do pai
    super()
    this.state = {
      lista:[]
    }
  }

  async componentDidMount(){
    let lista =  await fetch('http://localhost:3000/series')
    const series = await lista.json()
    this.setState({lista:series})
  }





  render() {
    console.log('estou sendo renderizado')
    return (
      <div className="App">
            <form method="POST">
                <div className="form">
                   <label htmlFor='nome'>Nome</label>
                   <input type="text" id="nome" name="nome"/>
                   <label htmlFor='ano_lanc'>Ano de lançamento</label>
                   <input type="text" id="ano_lanc" name="ano_lanc"/>
                   <label htmlFor='temp'>Temporadas</label>
                   <input type="text" id="temps" name="temps"/>
                   <label htmlFor='Sinopse'>Sinopse</label>
                   <textarea id="sinopse" name="sinopse"></textarea>
                   <button type="submit">Salvar</button>
                </div>
                <div className="list">
                    <table>
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
                        <tbody>
                          {this.state.lista.map(series =>{
                             return (
                              <tr key={series.id}>
                                <td>{series.nome}</td>
                                <td>{series.lancamento}</td>
                                <td>{series.temporadas}</td>
                                <td>{series.sinopse}</td>
                              </tr>
                             )
                          })}

                        </tbody>
                    </table>
                </div>
            </form>
      </div>
    );
  }

}


export default App;
