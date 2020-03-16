import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';



class Proveedor extends Component {

    constructor(props){
      super(props);
      this.state={
        title: 'Gestor Proveedores',
        act: 0,
        index: '',
        datas: []
      }
    } 
  
    componentDidMount(){
      this.refs.name.focus();
    }
  
    fSubmit = (e) =>{
      e.preventDefault();
      console.log('try');
  
      let datas = this.state.datas;
      let name = this.refs.name.value;
      let direccion = this.refs.direccion.value;
      let telefono = this.refs.telefono.value;
  
      if(this.state.act === 0){   
        let data = {
          name, direccion, telefono
        }
        datas.push(data);
      }else{                      
        let index = this.state.index;
        datas[index].name = name;
        datas[index].direccion= direccion;
        datas[index].telefono = telefono;
        
      }    
  
      this.setState({
        datas: datas,
        act: 0
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
    }
  
    fRemove = (i) => {
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
    }
  
    fEdit = (i) => {
      let data = this.state.datas[i];
      this.refs.name.value = data.name;
      this.refs.direccion.value = data.descripcio;
      this.refs.telefono.value = data.telefono;
      this.setState({
        act: 1,
        index: i
      });
  
      this.refs.name.focus();
    }  
  
    render() {
      let datas = this.state.datas;
      return (
        <div className="App">
          <h2>{this.state.title}</h2>
          <form ref="myForm" className="myForm">
            <input type="text" ref="name" placeholder="Nombre del proveedor" className="formField" />
            <input type="text" ref="direccion" placeholder="Direccion" className="formField" />    
            <input type="text" ref="telefono" placeholder="Telefono" className="formField" />
            <button onClick={(e)=>this.fSubmit(e)} className="myButton">Agregar</button>
          </form>
          <pre>
            <table className="table">
              <thead>
              <th>Id</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Acciones</th>
              </thead>
            <tbody>
            {datas.map((data, i) =>(
              <tr key={i}>
                <td>{i+1}</td>
                <td>{data.name}</td>
                <td>{data.direccion}</td>
                <td>{data.telefono}</td>
                <td>
                <button onClick={()=>this.fRemove(i)} className="myListButton">Eliminar </button>
                <button onClick={()=>this.fEdit(i)} className="myListButton">Modificar </button>
                </td>
              </tr>
            ))}
            </tbody>
            </table>
          </pre>
        </div>
      );
    }
  }
  
  export default Proveedor;
  