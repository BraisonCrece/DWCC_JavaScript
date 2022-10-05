/***************************************************************************************************************
*  
*   Objetivo: Buscar el numero perdido en un array de n elementos. 
*             Están todos los enteros en el array menos uno
*             Array desordenado
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
let input = [0,9,2,5,3,4,8,1,7]
// se podría usar un Set para eliminar duplicados y encontrar el número que falta (siempre y cuando solo falte 1)
let debeSumar = [...Array(input.length + 1).keys()].reduce((x,y) => x + y)

const buscaNumPerdido = (input) => debeSumar - input.reduce((x,y) => x + y) 