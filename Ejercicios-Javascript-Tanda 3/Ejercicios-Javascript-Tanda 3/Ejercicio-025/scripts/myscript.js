/***************************************************************************************************************
*  
*   Objetivo: En muchas recopilaciones de problemas cada problema tiene un identificador único para poderlo
*             referenciar de manera unívoca dentro del sistema. Los identificadores son números naturales correlativos, 
*             y el primer problema recibe el número 100. Empezar en 100, en lugar de en 1 (o en 0), no es un capricho. 
*             Los problemas se "archivan" en volúmenes, cada uno compuesto por 100 problemas. Al asignar el número 100 
*             al primer problema, es fácil saber en qué volumen está cualquier problema a partir de su identificador. 
*             En concreto, el primer volumen de problemas contiene a aquellos que tienen como identificador los números 
*             entre 100 y 199, el volumen 2 contiene los problemas con identificadores 200…299, etcétera.
*             Dado un problema, ¿en qué volumen está? 
*
*   Entrada : 100
*             306
*
*   Salida  : El problema 100 está en el volumen 1
*             El problema 306 está en el volumen 3
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
      }while(isNaN(out) || out < 100)
  }
  return out 
}

const identifier = filteredInput("number","Introduce el identificador")
const msg = `El problema ${identifier} está en el volumen ${identifier.toString().slice(0,-2)}`

alert(msg);

