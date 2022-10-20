const $d = document
//   $contenedor1 = $d.querySelector("#container1"),
//   $contenedor2 = $d.querySelector("#container2"),
//   $ul = $d.querySelector("ul"),
//   $li3 = $d.querySelector("li:nth-child(3)"),
//   $parrafos = $d.querySelectorAll("p");

// // Existen varias maneras de seleccionar elementos del DOM, una de ellas es con getElementById

// // aquí estamos seleccionando el elemento con id "container2" y guardándolo en la variable container2
// // ponemos en signo del dolar delante para indicar que es un elemento del DOM
// //      const $contenedor2 = $d.getElementById('container2')
// //
// // Para seleccionar elementos por su clase, usamos getElementsByClassName
// //      const $li = $d.getElementsByClassName('item2')
// //
// // Para seleccionar elementos por su etiqueta, usamos getElementsByTagName
// //      const $contenedores = $d.getElementsByTagName('div')

// // getElementbyName es para seleccionar elementos por su atributo name

// // **************************************************************************************//

// // Para seleccionar elementos por su selector CSS, usamos querySelector
// // const $contenedor_1 = $d.querySelector('#container1')// Para seleccionar varios elementos por su selector CSS, usamos querySelectorAll
// // const $items = $d.querySelectorAll('.item2')

// // si queremos preguntar por un li en concreto, podemos hacerlo de la siguiente manera
// // const $item_1 = $d.querySelector('.item2:nth-child(2)')
// // console.log($items);

// primero = $contenedor1.firstElementChild; // selecciona el primer elemento hijo del contenedor 1
// ultimo = $contenedor1.lastElementChild.textContent; // para obtener el texto de un elemento
// console.log(ultimo);

// console.log($li3.previousElementSibling); // selecciona el elemento anterior al li3

// console.log($li3.parentElement); // selecciona el elemento padre del li3

// console.log($contenedor1.childNodes); // selecciona todos los nodos hijos del contenedor1

// console.log($contenedor1.children); // selecciona todos los elementos hijos del contenedor1

// console.log($contenedor1.firstElementChild.nextElementSibling); // selecciona el segundo elemento hijo del contenedor1

// console.log($contenedor1.hasChildNodes()); // devuelve true si el contenedor1 tiene hijos
// // el texto tambien es un nodo hijo, mucho cuidado con eso

// // **************************************************************************************//

// // para crear elementos
// const $li5 = $d.createElement("li"); // creamos un elemento li
// $li5.textContent = "Nuevo elemento"; // le agregamos texto
// // tambien podemos usar append() para agregar texto

// $ul.appendChild($li5); // agrega el elemento al final de la lista

// // para agregar un elemento antes de otro
// const $li6 = $d.createElement("li");
// $li6.textContent = "Nuevo elemento 2";
// $ul.insertBefore($li6, $li3); // agrega el elemento antes del li3

// // para eliminar un elemento
// $ul.removeChild($li3); // elimina el li3
// // tambien podemos usar remove() para eliminar un elemento

// // para reemplazar un elemento
// const $li7 = $d.createElement("li");
// $li7.textContent = "Nuevo elemento 3";
// $ul.replaceChild($li7, $li6); // reemplaza el li6 por el li7

// // **************************************************************************************//


$item4 = $d.querySelector(".item3");
console.log($item4);

$item4.classList.add("blackWhite");

$item4.setAttribute("data-attribute", "item4"); // agrega un atributo al elemento
$item4.getAttribute("data-attribute"); // obtiene el valor del atributo