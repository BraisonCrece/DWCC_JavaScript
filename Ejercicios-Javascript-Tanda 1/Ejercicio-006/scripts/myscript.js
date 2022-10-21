/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
*
***************************************************************************************************************/

// receives 2 parameters, type => "number" / "string", msg => Mesagge to be prompted (must be a String)
function filteredInput(type, msg) {
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

let cat1 = filteredInput("number", "Introduce el valor del primer cateto")
let cat2 = filteredInput("number", "Introduce el valor del segundo cateto")

alert(`La hipotenusa del tiángulo con catetos ${cat1} y ${cat2} es: ${(Math.sqrt(cat1**2+cat2**2)).toFixed(4)}`)


