<?php

//llamada de campos
$nombre = $_POST['name'];//en esta variable estamos llamando al input con name=name
$correo = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = $_POST['message'];

//Datos para el correo
$destinatario = "neil.tapia11@gmail.com";
$asunto = "Contacto desde Portafolio ";

$contenido = "De: $nombre \n";
$contenido .= "Correo: $correo \n";
$contenido .= "Asunto: $asunto \n";
$contenido .= "Mensaje: $mensaje";

//Enviando mensaje
mail($destinatario, $asunto, $contenido);

