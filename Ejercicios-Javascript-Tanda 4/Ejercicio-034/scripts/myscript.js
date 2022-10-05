/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores, empezando con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,2,3,5,8,13,....
*
*   Notas:  ¿Cómo hacerlo de forma iterativa?
*           ¿Cómo hacerlo de forma recursiva?
*
***************************************************************************************************************/
/* function fib(n){
    if( n==1 || n == 2){
        out.push(1);
    }
    else{
        return fib(n-1)+fib(n-2);
    }
} */

const fibonacci = (num) => {
    let out = [0]
    let num1 = 0
    let num2 = 1
    while(num > 0){
        out.push(num1 + num2)
        num1 = num2
        num2++
        num--
    }
    return out
}
var out = [0]
const fiboRecursi = (num) => {    
    if(num === 1 || num === 2) return  1
    else return fiboRecursi(num-1) + fiboRecursi(num-2)
}
// 0 1 2 3 4 5 6 7 8 9
// 0 1 3 5 7