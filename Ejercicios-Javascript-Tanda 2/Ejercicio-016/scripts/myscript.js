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
      }while(isNaN(out)|| out < 1 || out > 9)
  }
  return out 
}
/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos de forma repetida un número entero entre 1 y 9 mientras no esté entre esos valores. 
*             Cuando el número esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 <= numero <= 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota:  * Mostraremos el resultado de dos formas:
*            - En la consola del navagador, empleando template strings
*            - En el documento HTML, formateando la salida empleando una tabla con 5 columnas y nueve filas
*          * Declararemos y emplearemos funciones
*
***************************************************************************************************************/
let user_number = filteredInput("number", "Introduce un número entre en 1 y el 9")
for(let i = 0; i<=10; i++)
{
    console.log(`${i} x ${user_number} = ${i*parseInt(user_number)}`)
}