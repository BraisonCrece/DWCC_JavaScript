/***************************************************************************************************************
*  
*   Objetivo: Crear un array con objetos tipo persona (con nombre y edad) y determinar cuantos son mayores de edad
*             Devolver el promedio de todas las edades
*             Devolver el promedio de las personas mayores de edad
*             Devolver el promedio de las personas menores de edad
*
*   Entrada : --
*
*
*   Salida  : El array de objetos creados y los datos indicados en el objetivo del ejercicio
*
*   Nota: Escogemos el nombre de la persona aleatoriamente entre los declarados en un array con nombres de personas 
*         La edad de la persona será un número aleatorio entero entre 1 y 100
*
***************************************************************************************************************/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

let grupo_personas = [
    new Persona("Pepe", 16),
    new Persona("Antonia", 33),
    new Persona("Lucía", 12),
    new Persona("Brais", 64),
    new Persona("David", 34),
    new Persona("Teresa", 64),
    new Persona("Samuel", 33),
    new Persona("Antonio", 21),
    new Persona("Federico", 87),
    new Persona("Gaspar", 3)
]

let mayoresEdad = grupo_personas.filter(persona => persona.edad > 18)
let menoresEdad = grupo_personas.filter(persona => persona.edad < 18)
let sumaEdades = grupo_personas.reduce((acum, actual) => acum + actual.edad, 0)

//console.log(sumaEdades)

console.log(`Hay un total de ${mayoresEdad.length} mayores de edad.
El promedio de edad es ${parseInt(sumaEdades)/grupo_personas.length} años.
El porcentaje de personas mayores de edad es ${(mayoresEdad.length/grupo_personas.length)*100}%.
El promedio de edad de las personas mayores de edad es ${parseInt(mayoresEdad.reduce((acum, actual) => acum + actual.edad,0))/mayoresEdad.length}.
Y El promedio de edad de las personas menores de edad es ${(parseInt(menoresEdad.reduce((acum, actual) => acum + actual.edad,0))/menoresEdad.length).toFixed(2)}`)