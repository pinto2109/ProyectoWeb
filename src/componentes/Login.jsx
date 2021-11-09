import react, {useRef, useState} from 'react';
import '../css/login.css';
import Boton from './Boton';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const URL_LOGIN = "http://localhost/ProyectoWeb/src/ws-login/login.php";

const enviarData = async(url, data)=>{
const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    // console.log(resp);
    const json = await resp.json();
    // console.log(json);

    return json;
}


export default function Login (props) {
    const [error, setError] = useState(null);

    const [espera, setEspera] = useState(null);

    const refUsuario = useRef(null);

    const refClave = useRef(null);

    const handleLogin= async()=>{

        setEspera(true);

        const data = {
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value
        };
        console.log(data);

        cookie.set("usuario", data.usuario)
        cookie.set("clave", data.clave)

        const respuestaJson = await enviarData( URL_LOGIN, data);
        console.log("respuesta desde el evento", respuestaJson);

        props.acceder(respuestaJson.conectado)

        setError(respuestaJson.error)
        setEspera(false);
    }


    return(
        <div className="login">
            
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header text-center">
                            <h3> 🍰 Iniciar sesion </h3> 
                        </div>
                        <div className="card-body">
                                        
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">📧</span>
                                <input type="email" ref={refUsuario} className="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">🔒</span>
                                <input type="password" ref={refClave} className="form-control" placeholder="Contraseña" aria-label="clave" aria-describedby="basic-addon2" />
                            </div>
                            
                            {
                                error &&    
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            }

                            <button onClick={handleLogin} disabled={espera} className="btn btn-info btn-lg btn-block" > Acceder </button>
                            
                            <Boton></Boton>

                            <div className="card-footer">
                                <span>¿No tienes un ususuario?</span><a href="http://">Crear Usuario</a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}