/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
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
      }while(isNaN(out) || out < 1 || out > 20)
  }
  return out 
}

const userNumber = filteredInput("number","Introduce un numero del 1 al 20")
let salida=""
let salidaHTML=""
for(let i = 1; i<= userNumber; i++) {
  salida+=`${Array.from({length: i},() => i).join(" ")}`
  salidaHTML+=`<p>${Array.from({length: i},() => i).join(" ")}</p>`
}

console.log(salida)
document.querySelector("#contenedor").innerHTML=salidaHTML


