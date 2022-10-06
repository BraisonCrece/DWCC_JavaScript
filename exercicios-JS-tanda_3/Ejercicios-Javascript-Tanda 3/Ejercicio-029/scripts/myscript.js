/***************************************************************************************************************
*  
*   Objetivo: n es pandigital si contiene al menos una vez todos los digitos del 0 al 9
*
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
const commonElements = (arr1,arr2) => arr1.filter( x => arr2.includes(x))

const esPandigital = (n) => {
  const debeContener = [0,1,2,3,4,5,6,7,8,9]
  let arr = Array.from(String(n),(num) => Number(num))
  return commonElements(debeContener,arr).length == 10 ? true : false
}

console.log(esPandigital(1129348012934801293840129348n))

console.log(esPandigital(1129348056712934801293840129348n))
