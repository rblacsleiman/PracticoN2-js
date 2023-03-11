/* Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: si ingresamos el DNI 40773821, la salida debería ser ‘L’
*/

let dni = prompt("Introduzca su número de DNI:");

while(true){
    if(dni === null){ 
      break;
    }
    
    dni = parseInt(dni); 
    
    if(isNaN(dni) || dni < 0 || dni > 99999999){
      alert("Por favor, introduzca un número válido de DNI.");
    }else{
      let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      let letra = letras.charAt(dni % 23);
      alert("La letra de su DNI es " + letra);
    }
  }
  