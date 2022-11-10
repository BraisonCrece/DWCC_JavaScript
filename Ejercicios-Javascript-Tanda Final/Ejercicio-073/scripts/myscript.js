/***************************************************************************************************************
 *
 *   Objetivo: Comprobar si cada caracter es precedido y seguido por un caracter adyaccente
 *             del alfabeto ingles
 *
 *
 *   Entrada :
 *
 *
 *   Salida  :
 *
 *
 ***************************************************************************************************************/
// const comprobarCaracter = (entrada) => {
//     let out = true
//     entrada.split('').forEach( (char, i, arr) => {
//         if(i !== 0) {
//             if( char.charCodeAt() - 1 !== arr[i-1].charCodeAt()) {
//                 console.log('dentro del if')
//                 out = false
//             }
//         }
//     })
//     return out
// }

// const comprobarCaracteres = (entrada) => {
//    return entrada.split('').every((char,i,arr) => {
//     if(i=== 0) return true
//     else{
//         return char.charCodeAt() - 1 === arr[i-1].charCodeAt()
// }})
// }

const comprobarCaracteres = (entrada) => {
  return entrada
    .split("")
    .every((char, i, arr) =>
      i === 0 ? true : char.charCodeAt() - 1 === arr[i - 1].charCodeAt()
    );
};
