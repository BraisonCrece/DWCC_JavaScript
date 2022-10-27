/***************************************************************************************************************
*  
*   Objetivo: Código Postal Canadiense
*
*
*
*   Entrada : A1A 1A1
*             A1A-1A1
*             A1A1A1
*   Salida  : 
*
*
***************************************************************************************************************/

//let expRegularCPCanada=/^[a-z]{1}[0-9]{1}[a-z]{1}[\ ,-]{0,1}[0-9]{1}[a-z]{1}[0-9]{1}$/gi
let expRegularCPCanada=/^[a-z]{1}[0-9]{1}[a-z]{1}[\ ,-]?[0-9]{1}[a-z]{1}[0-9]{1}$/gi
let cadena=prompt("CP de Canada")
console.log(expRegularCPCanada.test(cadena))
