import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Producto extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Gestor Productos',
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
    let descripcion = this.refs.descripcion.value;
    let fecha_venc = this.refs.fecha.value;
    let id_proveedor = this.refs.proveedor.value;

    if(this.state.act === 0){   
      let data = {
        name, descripcion, fecha_venc, id_proveedor
      }
      datas.push(data);
    }else{                      
      let index = this.state.index;
      datas[index].name = name;
      datas[index].descripcion = descripcion;
      datas[index].fecha_venc = fecha_venc;
      datas[index].id_proveedor = id_proveedor;
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
    this.refs.descripcion.value = data.descripcion;
    this.refs.fecha.value = data.fecha_venc;
    this.refs.id_proveedor = data.id_proveedor;

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
          <input type="text" ref="name" placeholder="Nombre del producto" className="formField" />
          <input type="text" ref="descripcion" placeholder="Descripcion" className="formField" />
        
          <input type="number" ref="proveedor" placeholder="Id_Proveedor" className="formField" />
          <input type="date" ref="fecha" placeholder="Fecha_Venc" data-date="" data-date-format="DD MMMM YYYY" value="2015-08-09" className= "formField"></input>

          <button onClick={(e)=>this.fSubmit(e)} className="myButton">Agregar </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.descripcion}, {data.fecha_venc},{data.id_proveedor}
              <button onClick={()=>this.fRemove(i)} className="myListButton">Eliminar </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">Modificar </button>
            </li>
          )}
        </pre>
    
      </div>
    
    );
  }
}

export default Producto;