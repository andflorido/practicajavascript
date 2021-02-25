/* condicionales  */
/*pedir nombre de persona */
let nombre= prompt("ingresa tu nombre");
/*  console.log (nombre); para probar donde esta el error*/ 
let edad=prompt ("ingresa tu edad");
/* mostramos el nombre de la persona */
/* que pasa si no ponen la edad (programación defensiva) */
if (edad >= 18 ) {
    alert("Bienvenidos a mi only fans");
} else {
    alert(" Primero aprende a limpiarte")
}
