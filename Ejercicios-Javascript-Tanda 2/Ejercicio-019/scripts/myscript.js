/***************************************************************************************************************
*  
*   Objetivo: Eliminar caracteres expeciales de una cadena. Se permiten 
*             guion, subrayado y espacios
*
*
*
*   Entrada : cadena
*
*
*   Salida  : cadena sin . ! @ # $ % & \ * ( )
*
*
***************************************************************************************************************/
function remove_unpermited_char(string){
    let regExp = /[\.*/@!#$%&\\\(\)]/g
    return string.replace(regExp,"")
}

console.log(remove_unpermited_char("Hola. ! @ # $ % & \ * ( ) que tal estas?"))


