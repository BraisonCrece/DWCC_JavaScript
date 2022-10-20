/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>=22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*   Nota: Emplear una funcion a la que se le pasen dos parámetros, peso y altura, que imprima la salida
*         Si nos vieramos en la necesidad de que una función devolviera varios datos ¿cómo podríamos hacerlo?
*
***************************************************************************************************************/
let peso = prompt("Introduce tu peso en Kg")
let altura = prompt("Introduce tu altura en metros")
let edad = prompt("Introduce tu edad")

const imcCalc = (p, a, e) => {
    let imc =  p / Math.pow(a,2)
    return imc >= 22 ?
                e < 45 ?
                    `Tu índice de masa corporal es ${imc.toFixed(2)}. Tienes un riesgo medio de enfermedad coronaria` :  
                    `Tu índice de masa corporal es ${imc.toFixed(2)}. Tienes un riesgo medio de enfermedad coronaria` :
                e < 45 ?
                    `Tu índice de masa corporal es ${imc.toFixed(2)}. Tienes un riesgo bajo de enfermedad coronaria` :  
                    `Tu índice de masa corporal es ${imc.toFixed(2)}. Tienes un riesgo medio de enfermedad coronaria`     
   
}

console.log(imcCalc(peso,altura))

/******************************************************************************************************************/
// Si nos vieramos en la necesidad de que una función devolviera varios datos ¿cómo podríamos hacerlo?
// Utilizamos a desestructuración de datos
// Por exemplo:
const getPersona = () => {
    return ['Manolo', 'González']
}

const [nombre, apellido] = getPersona()

console.log(nombre, apellido);
// > Manolo González