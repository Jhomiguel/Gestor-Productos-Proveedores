import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Proveedor from './components/Proveedores';
import Producto from './components/Productos';
import NavBar from './components/NaviBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <br/>
      <div className="App">
        <NavBar/>
       <Switch>
         <Route path='/Productos' component={Producto}></Route>
         <Route path='/Proveedores' component={Proveedor}></Route>
       </Switch>
        
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
/* <table>
            <thead>
            <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Fecha_Venc</th>
            <th>Id_Proveedor</th>
            </tr>
            </thead>
          <tbody>
            <tr>
              {/* {datas.map((data,i)=>
              <td key={i}>{i+1}</td>
              <td> {data.name}</td>
              <td>{data.address}</td>
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
              )} }
            </tr>
          </tbody> 
          </table> */