function datos() {
var nombres = document.getElementById("nombres").value;
var apellidos = document.getElementById("apellidos").value;
var email = document.getElementById("email").value;
var fechadenacimiento = document.getElementById("fecha de nacimiento").value;
var f = document.getElementById("f").checked;
var M = document.getElementById("M").checked;
var estatura = document.getElementById("estatura").value;
var peso = document.getElementById("peso").value;
 var deporte = document.getElementById("deporte").checked;

/*
 var mensaje = "Nombres:" + nombres
+ "\nApellidos:" + apellidos
+ "\nCorreo Electronico:" + email
+ "\nFecha de Nacimiento:" + fechadenacimiento
+ "\nEs Mujer: " + f
+ "\nEs Hombre: " + M
+ "\nEstatura: " +  estatura  + " m "
+ "\nPeso: " +  peso  + " kg "
+ "\nHace Deporte: " +  deporte ; 

console.log(mensaje);
*/
var IMC = peso / (estatura**2);
var Obesidad = IMC >= 30;
alert("IMC:" + IMC + "\nES Obeso: " + Obesidad);



}