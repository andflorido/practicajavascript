/* ejercicio día de la semana  */
/* Creamos variable para almacenar el día de la semana */
let dia = prompt  ("ingresa un día a la semana");
/* convertir lo que escriba el usuario en minusculas */
dia= dia. toLowerCase();
/* validamos en día si es entre semana o el fin de semana */
if (dia == "lunes" || dia== "martes" || dia== "miercoles" || dia== "miércoles" || dia== "jueves" || 
dia== "viernes") {
 alert("Es un día entre semana");
} else {
    if (dia== "sábado" || dia== "sabado" || dia== "domingo") {
        alert("es un fin de semana");
    } else {
        alert("Por favor ingrese un día a la semana");
    }
    
}