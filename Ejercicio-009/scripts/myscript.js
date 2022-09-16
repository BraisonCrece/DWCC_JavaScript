/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
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



function candyDeliver(numCaramelos, numNiños)
{
  let rest = numCaramelos%numNiños
  let candyPerChild = (numCaramelos-(rest))/numNiños

  alert(`El número de caramelos por niño es: ${candyPerChild}\nEl número de caramelos que sobran es: ${rest}`)
  
}

candyDeliver(filteredInput("number","Introduce el número total de caramelos: "),filteredInput("number","Introduce el número total de niños: "))