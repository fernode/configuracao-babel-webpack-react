import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from '../presentational/Header.jsx';

class Usuarios extends Component{
  constructor(){
    super();
    this.state = {
      usuarios: [],
    }
  }
  
  componentDidMount(){
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => this.setState({ usuarios: data.results          }));
  }
  
  render(){
    const {usuarios} = this.state;
    
    return(
      <div>
        <Header titulo="Lista"/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Sobrenome</th>
              <th scope="col">Login</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario)=>(
              <tr>
                <th scope="row"></th>
                <td> {usuario.name.first} </td>
                <td> {usuario.name.last} </td>
                <td> {usuario.login.username}</td>
                <td> {usuario.email} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
  <Usuarios />,
  document.getElementById('root')
);