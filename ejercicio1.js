/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar
 un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

 let edad = prompt("Ingresa tu edad:");

 if (isNaN(edad)) {
   document.write("Error: La edad ingresada no es un número válido.");
 } else {
   if (edad >= 18) {
     document.write("Te encuentras apto para conducir");
   } else {
     document.write("Por el momento eres menor de edad y no te encuentras apto para conducir");
   }
 }
 
 
    