import React, { Component } from 'react';
import './App.css';
import Tabla from './componentes/tabla';
import userId from './componentes/userId';
import ComboUsersId from './componentes/comboUsersId';

class App extends Component {

  state = {
    registros : [],
    registrosFiltrados : [],
    usersId : []
  };

  componentDidMount(){
    this.api();
  }

  api = async() => {
    try{
    const datos = await fetch('https://jsonplaceholder.typicode.com/posts', {method:'GET'});
    const registros = await datos.json();
    const usersId = this.getUsersId( registros )

    this.setState({registros : registros, registrosFiltrados: registros, usersId : usersId});
    } catch (err) {
      alert("Se produjo un error");
      this.setState({paises:[], paisesFiltrados:[], usersId: []})
    }
  };

  getUsersId = (registros) => {
    const fnReduce = (userIdInstance, each) => userIdInstance.addUserId(each);
    const usersId = registros.reduce( fnReduce, new userId());
    return usersId.getUsersId()
  } 

  eventoCombo = (e) => {
    if (e.target.value ==='0') {
      this.setState( { registrosFiltrados: this.state.registros} )
    }
    else {
      const registrosFiltrados = this.state.registros.filter(
        p=>p.userId === parseInt(e.target.value, 16) //se parsea a entero ya que el id lo toma como entero...
      )
      this.setState( { registrosFiltrados: registrosFiltrados} )
    }
  }

  render(){
    const {registrosFiltrados, usersId} = this.state;

    return (
      <div className="App">
        <ComboUsersId usersId = {usersId} handerCombo = {this.eventoCombo}/>
        <Tabla listaRegistros = {registrosFiltrados} tituloTabla="Lista de Registros"/>
      </div>
    );
  }
  
}

export default App;
