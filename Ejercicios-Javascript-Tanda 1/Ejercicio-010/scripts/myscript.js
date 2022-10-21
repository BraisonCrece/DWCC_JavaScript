/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
*
*
*   Entrada : edad
*
*
*   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
*             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
*             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
*
*   Notas   : Debemos comprobar si:
*                   - La edad es un número entero mayor que 0 (indicaremos el error)
*                   - La edad no puede ser superior a 120 (indicaremos el error)
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

function ageComment(age)
{
    if(age<=0) alert("Error, debes introducir un número positivo distinto de 0")
    else if(age>120) alert("Error, el número máximo aceptado es 120")
    else if(age<30) alert("!Ponte a trabajar!")
    else if(age<=64) alert("!Que ganas tengo de jubilarme!")
    else alert("!Descansa un poco!")
}

ageComment(filteredInput("number", "Introduce tu edad"))