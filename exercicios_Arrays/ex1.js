/* |1| *********************************************************************/

function aleatorio(min,max) {
    return Math.floor(min + (max-min) * Math.random())
}

const numeros = Array.from( {length: 20}, () => aleatorio(0,100));

const cuadrados =  numeros.map((x) => Math.pow(x,2))

const cubos = numeros.map(function(x) {
    return Math.pow(x,3)
})


/* |2| *********************************************************************/

const numeros_2 = Array.from( { length: 20 }, () => aleatorio(-10,10))

const positivos = numeros_2.filter((n) => n > 0)

const negativos = numeros_2.filter((n) => n < 0)

numeros_2.filter((n) => n > 0).length

/* |3| *********************************************************************/

const numeros_3 = Array.from( { length: 20 }, () => aleatorio(0,100))


const esPrimo = numero => {
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

numeros_3.some((x) => esPrimo(x))   // Devuelve true si la función esPrimo
                                    // devuelve true al pasarle como parámetro
                                    // alguno de los elementos del array    
 
numeros_3.every((x) => esPrimo(x))   // Devuelve true si la función esPrimo
                                     // devuelve true con todos los elementos

/* |4| *********************************************************************/

const cinco_nums = Array.from( {length: 5}, () => aleatorio(1,30));

const por_5 = cinco_nums.map((x) => x*5)

cinco_nums.forEach((num,index) => {
    console.log(`${num} x 5 = ${por_5[index]}`)
})

/* |5| *********************************************************************/

const arr_inv = [1,4,6,2]

console.log(arr_inv.reverse())

/* |6| *********************************************************************/

const creciente=array=>array.every((num,index) =>num < array[index+1]) //indica si está ordenado de forma creciente
const decreciente=array=>array.every((num,index) => num > array[index+1]) //indica si está ordenado de forma decreciente
const desordenado= arr =>!creciente(arr) && !decreciente(arr)

arr_inv.every((num,index) => {      //indica si está desordenado
    num < arr_inv[index+1]
})


/* |7| *********************************************************************/

const arr_media = Array.from({length: 10}, () => aleatorio(1,500))

const media = arr_media.reduce((x,y) => x + y)/arr_media.length // nos devuelve la media

const sup_media = arr_media.filter((x) => x > media)

const inf_media = arr_media.filter((x) => x < media) 

function masCercano(arr,media) {
    let min_sup_media = Math.min(arr.filter((x) => x > media))
    let max_inf_media = Math.max(arr.filter((x) => x < media).max)
    return (media - min_sup_media) < (media - max_inf_media) ? min_sup_media : max_inf_media
}

