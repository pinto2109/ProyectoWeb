import react, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader, Table} from 'reactstrap';
import axios from 'axios';
import './App.css';
import Volver from './componentes/BotonVolverAdmin';
import BarraAdmin from './componentes/BarraAdmin';


function Pagina() {
  const baseUrl ="http://localhost/ApiFramework/BD/";
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [frameworkSeleccionado, setFrameworkSeleccionado] = useState({
    Id_Producto: '', 
    NomProducto: '', 
    PrecioProducto: '', 
    StockProducto: '',
    // Foto: ''
  });

  const handleChange=e=>{
    const {name, value}=e.target;
    setFrameworkSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }))
    console.log(frameworkSeleccionado);
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }
  
  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPost=async()=>{
    var f = new FormData();
    f.append("NomProducto", frameworkSeleccionado.NomProducto);
    f.append("PrecioProducto", frameworkSeleccionado.PrecioProducto);
    f.append("StockProducto", frameworkSeleccionado.StockProducto);
    // f.append("Foto", frameworkSeleccionado.Foto);
    f.append("METHOD", "POST");
    await axios.post(baseUrl, f)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
    var f = new FormData();
    f.append("NomProducto", frameworkSeleccionado.NomProducto);
    f.append("PrecioProducto", frameworkSeleccionado.PrecioProducto);
    f.append("StockProducto", frameworkSeleccionado.StockProducto);
    // f.append("Foto", frameworkSeleccionado.Foto);
    f.append("METHOD", "PUT");
    await axios.post(baseUrl, f, {params: {Id_Producto: frameworkSeleccionado.Id_Producto}})
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(framework=>{
        if (framework.Id_Producto===frameworkSeleccionado.Id_Producto){
          framework.NomProducto=frameworkSeleccionado.NomProducto;
          framework.PrecioProducto=frameworkSeleccionado.PrecioProducto;
          framework.StockProducto=frameworkSeleccionado.StockProducto;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionDelete=async()=>{
    var f = new FormData();
    f.append("METHOD", "DELETE");
    await axios.post(baseUrl, f, {params: {Id_Producto: frameworkSeleccionado.Id_Producto}})
    .then(response=>{
      setData(data.filter(framework=>framework.Id_Producto!==frameworkSeleccionado.Id_Producto));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarFramework=(framework, caso)=>{
    setFrameworkSeleccionado(framework);

    (caso==="Editar")?
    abrirCerrarModalEditar():
    abrirCerrarModalEliminar()
  }

  useEffect(()=>{
    peticionGet();
  },[])

  
  return (
    <div className="App">
      <BarraAdmin></BarraAdmin>
      <header className="App-header">
        <h1>
          <br></br>
          De clic al boton para registrar un producto
          <br />
          <button className="btn btn-success" onClick={()=>abrirCerrarModalInsertar()}>Insertar</button>
          <br />
          <br></br>
          
          Volver a la pagina inicial
          <Volver></Volver>
        </h1>

        <Table dark className="Table table-striped">
          <thead>
            <tr>
              <th> Id_Producto  </th>
              <th> Nombre del Producto </th>
              <th> Precio del Producto </th>
              <th>Stock del Producto </th>
              <th>Opciones </th>
            </tr>
          </thead>
        
          <tbody>
            {data.map(framework=>(
              <tr key={framework.Id_Producto}>
                <td>{framework.Id_Producto}</td>
                <td>{framework.NomProducto}</td>
                <td>$ {framework.PrecioProducto}</td>
                <td>{framework.StockProducto}</td>
                {/* <td>{framework.Foto}</td> */}
                <td>
                  <button className="btn btn-primary" onClick={()=>seleccionarFramework(framework, "Editar")}>Editar</button> {"  "}
                  <button className="btn btn-danger" onClick={()=>seleccionarFramework(framework, "Eliminar")}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </header>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>Insertar Nuevo Producto</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Nombre del Producto: </label>
            <br />
            <input type="text" className="form-control" name="NomProducto" onChange={handleChange}/>
            <br />
            <label>Precio del Producto: </label>
            <br />
            <input type="text" className="form-control" name="PrecioProducto" onChange={handleChange}/>
            <br />
            <label>cantidad del Producto: </label>
            <br />
            <input type="text" className="form-control" name="StockProducto" onChange={handleChange}/>
            <br />
            {/* <label>Foto del Producto: </label>
            <br />
            <input type="text" className="form-control" name="Foto"/>
            <br /> */}
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>peticionPost()}>Insertar</button> {"  "}
          <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Producto</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Nombre del Producto: </label>
            <br />
            <input type="text" className="form-control" name="NomProducto" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.NomProducto}/>
            <br />
            <label>Precio del Producto: </label>
            <br />
            <input type="text" className="form-control" name="PrecioProducto" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.PrecioProducto}/>
            <br />
            <label>cantidad del Producto: </label>
            <br />
            <input type="text" className="form-control" name="StockProducto" onChange={handleChange} value={frameworkSeleccionado && frameworkSeleccionado.StockProducto}/>
            <br />
            {/* <label>Foto del Producto: </label>
            <br />
            <input type="text" className="form-control" name="Foto"/>
            <br /> */}
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>peticionPut()}>Editar</button> {"  "}
          <button className="btn btn-danger" onClick={()=>abrirCerrarModalEditar()}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          ??Esta seguro de eliminar {frameworkSeleccionado && frameworkSeleccionado.NomProducto}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>peticionDelete()}> Si </button>
          <button className="btn btn-secondary" onClick={()=>abrirCerrarModalEliminar()}> No </button>
        </ModalFooter>
      </Modal>


    </div>
  );
}

export default Pagina;
