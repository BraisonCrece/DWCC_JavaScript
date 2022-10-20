/***************************************************************************************************************
*  
*   Objetivo: Convierte una cadena en otra con las vocales entre guiones.
*
*
*
*   Entrada : Edabit
*
*
*   Salida  : -E-d-a-b-i-t
*
*
***************************************************************************************************************/

const convertirCadena = (cadena) => {
    let cadenaConvertida = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].match(/[aeiou]/i)) {
            cadenaConvertida += "-" + cadena[i] + "-";
        } else {
            cadenaConvertida += cadena[i];
        }
    }
    return cadenaConvertida;
}

// const convertirCadena = (cadena) => {
//     let out = cadena.split('').map((char) => {
//         if (char.match(/[aeiou]/i)) char = `-${char}-`
//         else char = char
//     }).toString().replaceAll(',','')
//     return out
// }



//"aeiou".split('').forEach(letra=>cadena.replaceAll(letra,`-${letra}-`))