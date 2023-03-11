
//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


const texto = "Hola, este es un ejemplo de texto con vocales";
const vocales = ["a", "e", "i", "o", "u"];
let count = 0;

for(let i = 0; i < texto.length; i++) {
  if(vocales.includes(texto[i].toLowerCase())) {
    count++;
  }
}

console.log(`El texto "${texto}" tiene ${count} vocales.`);