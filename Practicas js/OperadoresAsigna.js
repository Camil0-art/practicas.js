//TEMA NUEVO:
//OPERADORES DE ASIGNACIÓN 

//Estos operadores:

//modifican variables,
//actualizan valores,
//y se usan TODO el tiempo en programación.

// ======================================================================================

//RETO 1 — OBSERVACIÓN 

//Sin ejecutar:

let x = 10;

x += 5;

console.log(x);

//El total seria 15 ya que declaramos a x y el valor seria 10 y despues las 5 que se le suman serian 15

// =================================================================================================

// RETO 2 — OBSERVACIÓN

let monedas = 50;

monedas -= 20;

console.log(monedas);

// ¿Qué imprime?
// en la imagen nos damos de cuenta que declaramos monedas la cual tiene un valor de 50 asignado
// Luegos se realiza una resta de 20 monedas, la cual nos da como resultado, 30 monedas :).

// ==================================================================================================

//RETO 3 — OBSERVACIÓN AVANZADA
//let vidas = 5;

//vidas *= 2;

//vidas -= 3;

//console.log(vidas);

//Respuesta
// Primero incializamos la variable la cual lleva de nombre vidas, la cual asignamos un valor de 5,
// luego se realiza una multiplicacion de 2, la cual nos dara 10 2 * 5 = 10 luego de esta proceso de multiplicacion
// Se realiza una resta a la vida que tenemos entonces en el proceso matematico seria 
// 3 - 10 = 7 y ese seria el resultado total de todo este proceso,

//=================================================================================================

//CASO 1 — TIENDA 🛒
//Problema:

//Una persona tiene $200.

//Compra:

//una hamburguesa de $35,
//una gaseosa de $10,
//y un postre de $15.

let cartera = 200;

let hamburguesa = 35;
let gaseosa = 10;
let postre = 15;

 cartera -= hamburguesa;
 cartera -= gaseosa;
 cartera -= postre;


console.log("Dinero Restante: "+ cartera);

//EXPLICACION
//En el siguiente codigo declaramos una variable la cual se llama cartera el cual se le asigna un valor 
//de 200, y tenemos declarada mas variables, de compras que tuvimos, con su valor, luego realizamos el proceso
//Para ver cuanto nos queda, restamos cartera con hamburguesa, y volvemos a hacer el mismo procedimiento 
//con gaseosa  y postre, el cual el dinero total seria 140 

// =================================================================================================

//CASO 2 — VIDEOJUEGO 🎮
//Problema:

//Un personaje inicia con:

//100 de vida.

//Luego:

//recibe 25 de daño,
//encuentra una poción de +10,
//recibe otro golpe de 40.

let vida = 100;

vida -= 25;

vida += 10;

vida -= 40

console.log("Vida Total: " + vida);

//EXPLICACION

// en este caso  declaramos una variable num el cual ke asignamos el nombre vida, el cual su valor es 100
// luego esta vida recibe un disminucion de 25, luego gracias a una pocion le sumamos 10 de vida y para 
//Terminar recibe otro golpe, el cual le resta 40 de vida. el cual el total de vida seria 45.

// ===============================================================================================

//CASO 3 — PUNTOS DE EXPERIENCIA ⚔️
//Problema:

//Un jugador tiene:

//50 puntos de experiencia.

//Completa:

//una misión que multiplica experiencia ×2,
//luego pierde 20 puntos.

let jugador = 50;

jugador *= 2;

jugador -= 20;

console.log("Experiencia Total: " + jugador);

//EXPLICACION 

// en este caso declaramos una variable tipo numero, el cual tiene un nombre como jugador, el cual su valor es 50
// luego este jugador por la experiencia, se multiplica por 2 el cual lo deja en 100, luego a este jugador 
//se le realiza una resta de 20 de experiencia, el cual nos daria 80 de experiencia en total
// =================================================================================================

//CASO 4 — RETO DE OBSERVACIÓN 🧠

//Sin ejecutar:

//let monedas = 100;

//monedas -= 30;
//monedas += 10;
//monedas *= 2;

//console.log(monedas);

//EXPLICACION

// En este caso declaramos una variable tipo number, el cual se le asigna un valor de 100 monedas,
// a esta  monedas se le restan 30, el cual nos da un valor de 70, despues le sumamos 10 mas, nos daria 80
//Luego de todo este proceso multiplicamos, por 2 el cual nos da como resultado total 160  
