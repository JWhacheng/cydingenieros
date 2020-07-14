<?php
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = "josephwhacheng98@gmail.com";
$subject = "Formulario de contacto del sitio web:  $name";
$body = "Recibiste un nuevo mensaje del formulario de contacto de tu sitio web.\n\n"."Aquí están los detalles:\n\nNombre completo: $name\n\nCorreo electrónico: $email\n\nMensaje:\n$message";
$header = "From: josephwhacheng98@gmail.com\n";
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>