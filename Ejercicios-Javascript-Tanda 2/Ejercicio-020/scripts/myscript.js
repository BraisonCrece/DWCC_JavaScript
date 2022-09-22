/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*   Notas: Emplearemos la forma "clasica" de hacerlo.
*         ¿Cómo podemos hacerlo empleando arrays haciendo uso del método map? 
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

function eleva_al_cuadrado(inicio, fin){
    let arr = new Array
    for(let i = inicio; i < fin; i++){
        arr[0++] = Math.pow(i,2)
    }
    return arr
}
alert(eleva_al_cuadrado(2,12))