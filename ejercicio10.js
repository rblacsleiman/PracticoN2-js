/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
 Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

 
 let numFilas = parseInt(prompt("Introduce el número de filas:"));
 let numCols = parseInt(prompt("Introduce el número de columnas:"));
 let tabla = document.createElement("table");
 
 for (let i = 0; i < numFilas; i++) {
 
   let fila = document.createElement("tr");
   
   for (let j = 0; j < numCols; j++) {
     let celda = document.createElement("td");
     let numero = numFilas * numCols - (i * numCols + j);
     celda.textContent = numero;
     fila.appendChild(celda);
   }
   tabla.appendChild(fila);
 }
 
 document.body.appendChild(tabla);
 