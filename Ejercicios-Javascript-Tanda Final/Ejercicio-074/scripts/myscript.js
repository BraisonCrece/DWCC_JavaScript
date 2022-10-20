/***************************************************************************************************************
*  
*   Objetivo: Secuencia más larga de ceros
*
*
*
*   Entrada : "01100001011000"
*
*
*   Salida  : "0000"
*
*
***************************************************************************************************************/
const laMasLarga = (input) => {
    let masLarga = ''
    input.split('1').forEach(val => val.length > masLarga.length ? masLarga = val : undefined) 
    return masLarga  
} 