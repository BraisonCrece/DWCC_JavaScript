/***************************************************************************************************************
*  
*   Objetivo: Burcar la primera letra que tenga una ocurrencia única en una cadena
*
*
*
*   Entrada : "EFFEAABbc" => EFABC
*
*
*   Salida  : C
*
*
***************************************************************************************************************/

const primeraUnica = (entrada) => {
    const unicos = [...new Set(entrada.split(''))].toString().replaceAll(',','')
}