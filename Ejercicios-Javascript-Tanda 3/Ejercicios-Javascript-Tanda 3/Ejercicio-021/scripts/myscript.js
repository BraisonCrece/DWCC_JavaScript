/***************************************************************************************************************
*  
*   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
*             Crear tres funciones: 
*                1.- Devuelve un array con los elementos comunes en los arrays
*                2.- Devuelve los elementos del primer array que no están en el segundo array
*                3.- Devuelve los elementos del segundo array que no están en el primer array
*       
*             Rellenar los arrays con númeos aleatorios entre -100 y 100
*
*   Entrada : La longitud del array (numero entero n)
*
*   Salida  : Los elementos del Array1
*             Los elementos del Array2
*             Los arrays tienen XX elementos comunes: .... (los elementos comunes separados por comas)
*             Elementos del primer array no presentes en el segundo array: ...
*             Elementos del segundo array no presentes en el primer array: ....
*
***************************************************************************************************************/
const randomNumberBetween = (min,max) => Math.floor(min + (max-min) * Math.random())

const commonElements = (arr1,arr2) => arr1.filter( x => arr2.includes(x))

const onlyAtFirstArray = (arr1,arr2) => arr1.filter( x => !arr2.includes(x))

const onlyAtSecondArray = (arr1,arr2) => arr2.filter( x => !arr1.includes(x))

const arrayLength = prompt("Introduce la longitud del array")

const arr1 = Array.from({length: arrayLength}, () => randomNumberBetween(-100,100))
const arr2 = Array.from({length: arrayLength}, () => randomNumberBetween(-100,100))

alert(`
    Array 1 = ${arr1}.
    Array2 = ${arr2}.
    Los arrays tienen ${ commonElements(arr1,arr2).length } elementos comunes.
    - Elementos comunes: ${ commonElements(arr1,arr2) }
    - Elementos del primer array no presentes en el segundo array: ${onlyAtFirstArray(arr1,arr2)}
    Elementos del segundo array no presentes en el primer array: ${onlyAtSecondArray(arr1,arr2)}
    `)