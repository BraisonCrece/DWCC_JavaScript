/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : nfilas, ncols (números enteros)
*
*
*   Salida  : tabla html con nfilas y ncols. Cada celda contendrá el producto del número de fila por la columna
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

const buildTable = (nFilas,nCols) => {
  let itR = 1
  let itC = 1
  
  while(itR <= nFilas){
    document.write("<tr>")
    while(itC <= nCols){
      document.write(`<td>${itC*itR}</td>`)
      itC++
    }
    itC = 1
    document.write("</tr>")
    itR++
  }  
}

const nfilas = filteredInput("number", "Introduce el numero de filas")
const ncols = filteredInput("number", "Introduce el numero de columnas")


document.write("<table>")
buildTable(nfilas,ncols)
document.write("</table>")


