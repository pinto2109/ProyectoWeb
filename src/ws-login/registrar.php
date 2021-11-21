<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./css/Crear.css" type="text/css">
	<link rel="stylesheet" href="./css/login.css" type="text/css">
	<link rel="stylesheet" href="./bootstrap.min.css">
	<title>Crear Usuario</title>
</head>
<body>
<div class="login">
	<div class="row">
		<div class="col-sm-4 offset-4 mt-5">
			<div class="card pt-5">
				<div class="card-header text-center">
					<h3>✍ Crear nuevo usuario ✍</h3>
				</div>
				<div class="card-body">
					<form method="post">
					<div class="input-group mb-3">
						<span class="input-group-text" id="basic-addon1">Nombre</span>
						<input type="text" name="nombre" class="form-control" placeholder="Nombre" aria-describedby="basic-addon1" />
					</div>

					<div class="input-group mb-3">
						<span class="input-group-text" id="basic-addon2">Apellidos</span>
						<input type="text" name="apellidos" class="form-control" placeholder="Apellidos" aria-describedby="basic-addon2" />
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text" id="basic-addon2">Usuario</span>
						<input type="text" name="usuario" class="form-control" placeholder="Nombre de usuario" aria-describedby="basic-addon3" />
					</div>
					<div class="input-group mb-3">
							<span class="input-group-text" id="basic-addon2">🔒</span>
							<input type="password" name="contraseña" class="form-control" placeholder="Contraseña" aria-label="clave" aria-describedby="basic-addon4" />
					</div>

					<input type="submit" name="submit" class="btn btn-info btn-lg btn-block" value="Crear Usuario"><br>
					
					</form>
					<?php
						include "conectar.php";
						if (isset($_POST['submit'])){
							if(strlen($_POST['nombre']) >= 1 && strlen($_POST['apellidos']) >= 1 && strlen($_POST['usuario']) >= 1 && strlen($_POST['contraseña'])){
								$nombre = trim($_POST['nombre']);
								$apellidos = trim($_POST['apellidos']);
								$usuario = trim($_POST['usuario']);
								$password = trim($_POST['contraseña']);
								$clave = password_hash($password, PASSWORD_DEFAULT);

								$consulta = "INSERT INTO tb_cliente (usuario, clave, nombre, apellidos) VALUES ('$usuario', '$clave', '$nombre', '$apellidos' )";
								$resultado = mysqli_query($conexion, $consulta);

								if($resultado){
									?>
									<p class="texto">Te has registrado correctamente</p>
									<?php
								} else {
									?>
									<p class="texto">Ocurrio un error</p>
									<?php
								}
							} else {
									?>
									<div class="alerta">
										Complete todos los campos
									</div>
									
									<?php
							}
						}
					?>
					
				</div>
			</div>
			<button class="btn btn-info btn-lg " > <a class="btn-volver" href="http://localhost:3000/Login" > Volver Atrás</a> </button>
		</div>   
	</div>
</div>
	

	
</body>
</html>