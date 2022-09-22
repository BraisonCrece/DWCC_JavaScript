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

/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 1 hasta 
*             ese numero. Realizarlo con los tres tipos de bucles.
*
*   Entrada : numero entero n
*
*
*   Salida  : 2,4,6,....,n   
*
*   Notas: La salida finalizará en n o n-1 dependiendo de si n es par o impar
*
*   Notas: Resolver inicialmente e ejercicio de forma "clasica". Trataremos de realizarlo con arrays:
*          - ¿Como defenir un array con esos valores de forma rápida? 
*          - ¿Cómo recorrer el array uno a uno con métodos (funcion aplicada sobre el objeto) del mismo?
*          - ¿Cómo "unir" los elementos de un array y convertirlos en una cadena?
*
***************************************************************************************************************/
let user_number = filteredInput("number", "Introduce un número")
let limit = user_number%2 == 0 ? parseInt(user_number) + 1 : parseInt(user_number)
let out = ""

for(let i = 1; i < limit; i++)
{
    if(i%2 == 0){
        out == "" ? out = out.concat(`${i}`) : out = out.concat(`, ${i}`)
    }
}

alert(out)

/**************************************************************************************************************/
let user_number_2 = filteredInput("number", "Introduce un número")
let limit_2 = user_number_2%2 == 0 ? parseInt(user_number_2) + 1 : parseInt(user_number_2)
let outWhile = ""
let it = 1
while(it < limit_2)
{
    it++
    if(it%2 == 0){
        outWhile == "" ? outWhile = outWhile.concat(`${it}`) : outWhile = outWhile.concat(`, ${it}`)
    }
    
}
alert(outWhile)

/**************************************************************************************************************/
let user_number_3 = filteredInput("number", "Introduce un número")
let limit_3 = user_number_3%2 == 0 ? parseInt(user_number_3) + 1 : parseInt(user_number_3)
let outWhile_3 = ""
let it_3 = 1
do
{
    it_3++
    if(it_3%2 == 0){
        outWhile_3 == "" ? outWhile_3 = outWhile_3.concat(`${it_3}`) : outWhile_3 = outWhile_3.concat(`, ${it_3}`)
    }
    
}while(it_3 < limit_3)

alert(outWhile_3)

/**************************************************************************************************************/

const xArray = Array.from({length:5},el=> 7)
console.log(xArray)