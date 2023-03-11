/* Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

 let suma = 0;

while (true) {
  let input = prompt("Ingresa un número:");

  if (input === null) {
    alert(`La suma total es ${suma}`);
    break;
  }

  let numero = Number(input);

  if (isNaN(numero)) {
    alert("No has introducido un número válido.");
    continue;
  }

  suma += numero;
}
