/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la consola el resultado de 
*             sumarlos, restarlos, multiplicarlos y dividirlos
*
*   Entrada : Dos números enteros: numero1, numero2
*
*
*   Salida  : La suma de numero1 y numero2 es: numero1+numero2 
*             La resta de numero1 y numero2 es: numero1-numero2 
*             El producto de numero1 y numero2 es: numero1*numero2 
*             La division de numero1 entre numero2 es: numero1/numero2 
*
*   Notas   : Ten en cuenta que:
*                   - la división entre los números puede dar un número con muchos decimales
*                     ¿Cómo podríamos limitar el número de decimales que se mostrarán?
*                   - ¿Qué pasaría en la division si numero2=0 ?
*
***************************************************************************************************************/
let numero1
let numero2

do{
    numero1 = parseInt(prompt("Introduce el primer número: "))
    numero2 = parseInt(prompt("Introduce el segundo número: "))
    if(isNaN(parseFloat(numero1)) || isNaN(parseFloat(numero2))) alert("Debes introducir números")
}while(!isNaN(parseFloat(numero1)) == false || !isNaN(parseFloat(numero2)) == false)



console.log(`La suma de ${numero1} y ${numero2} es: ${numero1+numero2}`)
console.log(`La resta de ${numero1} y ${numero2} es: ${numero1-numero2}`)
console.log(`El producto de ${numero1} y ${numero2} es: ${numero1*numero2}`)
console.log(`La división de ${numero1} y ${numero2} es: ${(numero1/numero2).toFixed(2)}`)


