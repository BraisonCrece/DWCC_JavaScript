/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-89
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
*
***************************************************************************************************************/
// receives 2 parameters, type => "number" / "string", msg => Mesagge to be prompted (must be a String)
function filteredInput(type, msg) 
{
  let out
  if(type == "string"){
      do{
          out = prompt(msg)
      }while(!isNaN(out))
  }
  else if(type == "number"){
      do{
          out = prompt(msg)
      }while(isNaN(out))
  }
  return out 
}

let nota = filteredInput("number","Introduce el porcentaje de acierto de tu examen")
const msg = "El examen se cualifica con un"

if( nota < 59 ) console.log("Suspenso");
else if( nota < 60 ) console.log(`${msg} F`)
else if( nota < 70 ) console.log(`${msg} D`)
else if( nota < 80 ) console.log(`${msg} C`)
else if( nota < 90 ) console.log(`${msg} B`)
else if( nota < 101 ) console.log(`${msg} A`)