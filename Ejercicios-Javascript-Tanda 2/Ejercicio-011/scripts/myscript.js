/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*   Nota: - Resolver de forma "clasica"
*         - Resolver empleando el objeto Math
*
***************************************************************************************************************/
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

let num1 = filteredInput("number", "Introduce el primer número")
let num2 = filteredInput("number", "Introduce el segundo número")
let num3 = filteredInput("number", "Introduce el tercer número")
let user_numbers = [num1,num2,num3]
let max = num1


user_numbers.forEach(function(number){
    if(number>max) max = number
})

alert(`E número más grande es ${max}`)

alert(`E número más grande (utilizando Math) es ${Math.max(...user_numbers)}`)