//Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

const num= prompt("Ingrese un número entre 1 y 50:");
let piramide = "";

if (num > 0 && num<= 50) {
  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      piramide += j + " ";
    }
    piramide += "\n";
  }
  console.log(piramide);
} else {
  console.log("El número ingresado no es válido.");
}