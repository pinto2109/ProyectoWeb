<?php
	include "conectar.php";
    $conn = conectarDB();
	
	$password= "456";
	
	
	$usuario= "usuario1";
	$nombre= "pepito";
	$apellidos= "Jiménez Blanco";	
	$clave = password_hash($password, PASSWORD_DEFAULT);
	
	echo $password;
	echo "<br/>";
	echo $clave;
	echo "<hr/>";
	

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO tb_cliente (usuario, clave, nombre, apellidos)
VALUES ('$usuario', '$clave', '$nombre', '$apellidos' )";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
	
//fuente https://www.w3schools.com/php/php_mysql_insert.asp
?>