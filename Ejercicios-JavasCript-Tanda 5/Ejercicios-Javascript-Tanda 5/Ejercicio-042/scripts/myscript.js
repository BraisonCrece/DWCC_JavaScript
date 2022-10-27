/***************************************************************************************************************
*  
*   Objetivo: Telefono
*
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

let expRegularTelefono=/^\([0-9]{3}\)\ [0-9]{3}-[0-9]{4}$/
let cadena=prompt("Telefono formato (ABC) DEF-GHIJ")
console.log(expRegularTelefono.test(cadena))
