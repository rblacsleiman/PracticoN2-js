
let cadena = prompt("Por favor ingrese una cadena de texto:");
let cadena_con_signos = "";

for (let i = 0; i < cadena.length; i++) {
  cadena_con_signos += cadena[i] + "-";
}
alert(cadena_con_signos.slice(0, -1));