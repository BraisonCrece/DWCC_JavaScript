/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*   Notas: Métodos del objeto String
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

function positionOfWord (text,word) {
  let out = []
  let start = 0
  while(true){
    let pos = text.indexOf(word,start)
    if(pos == -1) break
    else{
      out.push(pos)
      start = pos + word.length
    }
  }
  return out
}

const userText = filteredInput("string","Introduce el texto")
const userWord = filteredInput("string","Introduce la palabra")

console.log(positionOfWord(userText,userWord))


