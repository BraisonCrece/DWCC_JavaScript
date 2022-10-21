/***************************************************************************************************************
*  
*   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
*             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
*             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
*             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
*             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
*             Celsius = (5/9) * (Fahrenheit-32)
*
*   Entrada : Número decimal
*
*
*   Salida  : Númeero decimal (2 dígitos como máximo en la parte decimal)
*             Ejemplo: Fahrenheit=100, Celsius=38.33
*
*   Notas: Emplear una funcion con un parámetro
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

function celsiusConverter(num)
{
    return ((5/9) * (num-32)).toFixed(2)
}

function theWeatherMan(num)
{   
    let comment = `Fahrenheit = ${userNumber}, Celsius = ${num}`

    if(num < 0)
    {
        comment = comment + "\nTe congelas!"
    }
    else if(num < 10)
    {
        comment = comment + "\nQue frío!"
    }
    else if(num >= 25)
    {
        comment = comment + "\nQue calor!"
    }
    alert(comment)
}

let userNumber = filteredInput("number","introduce la temperatura en grados Fahrenheit: ")

theWeatherMan(celsiusConverter(userNumber))

