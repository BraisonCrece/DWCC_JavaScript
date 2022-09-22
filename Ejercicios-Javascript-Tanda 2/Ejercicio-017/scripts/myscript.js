/***************************************************************************************************************
*  
*   Objetivo: Crear un objeto persona con nombre y edad y un metodo que determine si es mayor o no de edad
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

let persona = {
    "nombre" : "Manolo",
    "edad"   :  36
}

function esMayorDeEdad(persona){
    return persona.edad > 18 ? true : false
}

console.log(esMayorDeEdad(persona))