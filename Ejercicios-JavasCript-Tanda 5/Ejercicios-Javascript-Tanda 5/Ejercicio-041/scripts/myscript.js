/***************************************************************************************************************
*  
*   Objetivo: 
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

function getDays(fecha1Str,fecha2Str) {
    let fecha1Array=fecha1Str.split('/')
    let fecha2Array=fecha2Str.split('/')
    let fecha1=new Date(parseInt(fecha1Array[2]),parseInt(fecha1Array[1])-1,parseInt(fecha1Array[0]))
    let fecha2=new Date(parseInt(fecha2Array[2]),parseInt(fecha2Array[1])-1,parseInt(fecha2Array[0]))

    return (fecha2-fecha1)/(24*60*60*1000)+1
}

let fecha1=prompt("Dame una fecha en formato dd/mm/aaaa")
let fecha2=prompt("Dame una fecha en formato dd/mm/aaaa")

console.log(getDays(fecha1,fecha2))