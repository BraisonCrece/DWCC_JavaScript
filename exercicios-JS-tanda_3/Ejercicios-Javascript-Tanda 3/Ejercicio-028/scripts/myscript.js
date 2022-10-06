/***************************************************************************************************************
*  
*   Objetivo: MiniSudoku 3x3. Un sudoku es una cuadricula 9x9 con cuadriculas cuadradas 3x3. El Sudoku estará completo
*             cuando relleanmos cada cuadricula 3x3 con número de 1 a 9, de forma que cada fila y cada columna de la
*             cuadricula 9x9 también está formada por números de 1 a 9.
*             Crea una funcion que compruebe si la cuadricula 3x3 contiene todos y cada uno de los número del 1 al 9
*
*   Entrada : 
*
*
*   Salida  : true, false
*
*
***************************************************************************************************************/
const commonElements = (arr1,arr2) => arr1.filter( x => arr2.includes(x))

const validaCuadricula = (cuadricula) => {
  const cuadriculaCorrecta = [1,2,3,4,5,6,7,8,9]
  let arr = [] 
  cuadricula.forEach(element => {
    arr.push(...element)
  })
  return commonElements(cuadriculaCorrecta,arr).length == 9 ? true : false
}

const cuadricula = [[4,5,6],[7,8,9],[2,1,3]]

console.log(validaCuadricula(cuadricula)) 