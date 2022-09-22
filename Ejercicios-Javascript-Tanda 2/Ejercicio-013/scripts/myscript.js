/***************************************************************************************************************
*  
*   Objetivo: puntuacionGolf. El el golf cada hoyo tiene un par, es decir, el número medio de golpes que se espera hacer para meter la bola en el hoyo. 
*             Dependiendo de como de lejos, por arriba o abajo, estamos del par, la clasificacion recibirá un nombre diferente.
*             Crearemos una funcion que al pasarle el par y el número de golpes que se hicieron devuelva el nombre de la clasificacion de acuerdo con la siguiente tabla:
*
*             Golpes	    Clasificacion
*                                          1	         "Hole-in-one!"
                            *              <= par - 2	 "Eagle"
                            *              par - 1	     "Birdie"
                            *              par	         "Par" 
*              par + 1	     "Bogey"
*              par + 2	     "Double Bogey"
*              >= par + 3	 "Go Home!"
*
*   Entrada : 
*
*
*   Salida  : La cadena que representa la clasificion
*     
*                puntuacionGolf(4, 1) debería devolver Hole-in-one!
*                puntuacionGolf(4, 2) debería devolver Eagle
*                puntuacionGolf(5, 2) debería devolver Eagle
*                puntuacionGolf(4, 3) debería devolver Birdie
*                puntuacionGolf(4, 4) debería devolver Par
*                puntuacionGolf(1, 1) debería devolver Hole-in-one!
*                puntuacionGolf(5, 5) debería devolver Par
*                puntuacionGolf(4, 5) debería devolver Bogey
*                puntuacionGolf(4, 6) debería devolver Double Bogey
*                puntuacionGolf(4, 7) debería devolver Go Home!
*                puntuacionGolf(5, 9) debería devolver Go Home!
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

function puntuacionGolf(par,num_golpe)
{
    switch(true)
    {
        case num_golpe == 1:
            alert("Hole-in-one!")
            break
        case par == num_golpe:
            alert("Par")
            break
        case par - num_golpe == 1:
            alert("Birdie")
            break
        case par - num_golpe >= 2:
            alert("Eagle")
            break
        case num_golpe - par == 1:
            alert("Bogei")
            break
        case num_golpe - par == 2:
            alert("Double Boguei")
            break
        default:
            alert("Go Home!")        
    }

}

puntuacionGolf(filteredInput("number", "Introduce el par"),filteredInput("number", "Introduce el número de golpe"))