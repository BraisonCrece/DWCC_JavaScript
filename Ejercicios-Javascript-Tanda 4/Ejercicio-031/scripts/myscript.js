/***************************************************************************************************************
*  
*   Objetivo: Funcion que devuelve un objeto con la frecuencia de cada vocal en una frase
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
*
*
*
***************************************************************************************************************/
const vocales = ['a','e','i','o','u']
const frase = "Parece ser que va a empezar a llover pronto" 
let out = {}

vocales.forEach((vocal) => {
    out[vocal] = (frase.split('').filter((char) => char === vocal).length)
})

