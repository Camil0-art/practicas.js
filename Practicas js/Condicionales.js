/*¿QUÉ ES UN CONDICIONAL?

Es una pregunta lógica.*/


/*ESTRUCTURA BÁSICA
if (condicion) {
}*/

/*PERADORES DE COMPARACIÓN 🔥

Estos son MUY importantes.

Operador	Significado
>	mayor que
<	menor que
>=	mayor o igual
<=	menor o igual
==	igual
===	igual estricto
!=	diferente que  */

/*¿QUÉ HACE?

Si el if NO se cumple,
else ejecuta otra cosa.

EJEMPLO
let edad = 16;

if (edad >= 18) {
    console.log("Puede entrar");
} else {
    console.log("No puede entrar");
}*/

/*AHORA:
else if

Sirve para múltiples decisiones.

EJEMPLO
let nota = 75;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprobado");
} else {
    console.log("Perdió");
}*/

//=========================================================================================

//CASO 1 — LOGIN 🔐
/*Problema

Un usuario intenta ingresar.

Datos correctos:

usuario: "camilo"
contraseña: "1234"*/

let usuario = "Camilo";
let Contraseña = "1234";

let usuario = prompt("Ingrese su Usuario");

let Contraseña = prompt ("Ingrese Su Contraseña");

if (Contraseña === "1234" && usuario === "Camilo" ){
    alert("Bienvenido al sistema :)");
}else {
    alert("Datos Incorrectos");
}











