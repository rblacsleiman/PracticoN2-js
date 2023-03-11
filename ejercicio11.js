// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. */


let edad1 = prompt("Ingresa la primera edad:");
let edad2 = prompt("Ingresa la segunda edad:");
let edad3 = prompt("Ingresa la tercera edad:");

let nombre1 = prompt("Ingresa el primer nombre:");
let nombre2 = prompt("Ingresa el segundo nombre:");
let nombre3 = prompt("Ingresa el tercer nombre:");

let edades = [edad1, edad2, edad3];

let edadMayor = Math.max(...edades);

let nombres = [nombre1, nombre2, nombre3];

let indiceMayor = edades.indexOf(edadMayor);

let nombreMayor = nombres[indiceMayor];

alert(`El nombre del mayor es: ${nombreMayor}`);