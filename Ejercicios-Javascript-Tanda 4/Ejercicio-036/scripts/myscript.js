/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
*             por una pandemia
*
*   Entrada : segundos
*
*
*   Salida  : Mensaje tal como: "Hemos estado confinados A semana/s, B día/s, C hora/s, D minuto/s, E segundo/s"
*             Para 183901 segundos la salida sería: "Hemos estado confinados 0 semanas, 2 días, 3 horas, 5 minutos, 1 segundo"
*
*   Nota: Emplear una funcion
*
***************************************************************************************************************/
import filteredInput from "../../../filteredImput";

const numSegundosConfinados = filteredInput("number","Introduce un número entero positivo")

const conversorSegundos = (segundos) => {
    return "Hemos estado confinados "
    let semanas = 0
    if(segundos / 604800 > 0) semanas = 

}

function secondsToString(seconds)
{ 
    return numdays + " dias " + numhours + " horas " + numminutes + " minutos " + numseconds + " segundos";
}