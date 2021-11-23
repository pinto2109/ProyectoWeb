import '../css/Crear.css';

export default function CrearUsuario() {

    return(
        <div className="login">

        <div className="row">
            <div className="col-sm-4 offset-4 mt-5">
                <div className="card pt-5">
                    <div className="card-header text-center">
                        <h3>✍ Crear nuevo usuario ✍</h3>
                    </div>
                    <div className="card-body">

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre</span>
                            <input type="text" className="form-control" placeholder="Nombre" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon2">Apellidos</span>
                            <input type="text" className="form-control" placeholder="Apellidos" aria-describedby="basic-addon2" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon2">Usuario</span>
                            <input type="text" className="form-control" placeholder="Nombre de usuario" aria-describedby="basic-addon3" />
                        </div>
                        <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">🔒</span>
                                <input type="password" className="form-control" placeholder="Contraseña" aria-label="clave" aria-describedby="basic-addon4" />
                        </div>


                        <center><button className="btn btn-info btn-lg btn-block" > Crear Usuario </button></center>
                        {/* {cookie.get("usuario") ? window.location.href = `http://localhost:3000/Menu` : ""} */}

                    </div>
                </div>
               
                <button className="btn btn-info btn-lg " > <a className="btn-volver" href="/Login" > Volver Atrás</a> </button>
            </div>   
        </div>

    </div>
       
        

    );
}