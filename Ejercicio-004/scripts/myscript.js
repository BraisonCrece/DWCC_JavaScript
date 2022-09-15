/***************************************************************************************************************
*  
*   Objetivo: Crea un script Javascript que solicite el nombre a un usuario y su edad al abrir la página.
*             Tenemos que comprobar que se introduce una cadena y un número entero
*
*
*   Entrada : cadena de texto, numero: nombre, edad
*
*
*   Salida  : Tiene que mostrar la información solicitada a través de la consola de depuración
*                       Tu nombre es .... y tienes .... años
*
*
***************************************************************************************************************/

let nombre = prompt("Introduce tu nombre: ")
let edad = prompt("Introduce tu edad: ")


if(isNaN(parseFloat(nombre)) && !isNaN(parseFloat(edad))){
    console.log(`Tu nombre es ${nombre} y tienes ${edad} años.`)
}
else console.log("Alguno de los datos introducidos no es válido")