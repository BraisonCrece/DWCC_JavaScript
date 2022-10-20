const $d = document,
      $contenedorInt = $d.querySelector("#contInt"),
      $contenedorExt = $d.querySelector("#contExt"),
      $enlace = $d.querySelector("a"),
      $enlaces = $d.querySelectorAll("a")


// el comentario de abajo no se debe de usar
// $contenedorExt.onclick = e => {
//     e.stopPropagation()
//     console.log("Click en contenedor externo")
// }


// $contenedorInt.onclick = e => {
//     e.stopPropagation()
//     console.log("Click en contenedor interno")
// }

// Evento click
// $enlaces.forEach(enlace => enlace.addEventListener("click", e => {
//     alert(`Has hecho click en el enlace ${e.target.textContent}`)
//     // e.target representa el elemento que dispara el evento
// }))

$contenedorExt.addEventListener("click", e => {
    // preventDefault() detiene el comportamiento por defecto del evento
    e.preventDefault()
    alert(`${e.target.textContent} no es un enlace`)
})

// $contenedorInt.addEventListener("click", e => {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("Click en el contenedor interno")
// })


// listado de selectores

// $d.querySelector("a") // selecciona el primer elemento que coincida con el selector
// $d.querySelectorAll("a") // selecciona todos los elementos que coincidan con el selector
// $d.querySelector("#id") // selecciona el elemento que coincida con el id
// $d.querySelectorAll("#id") // selecciona todos los elementos que coincidan con el id
// $d.querySelector(".class") // selecciona el elemento que coincida con la clase
// $d.querySelectorAll(".class") // selecciona todos los elementos que coincidan con la clase
// $d.querySelector("tag") // selecciona el elemento que coincida con la etiqueta
// $d.querySelectorAll("tag") // selecciona todos los elementos que coincidan con la etiqueta
// $d.querySelector("tag.class") // selecciona el elemento que coincida con la etiqueta y la clase
// $d.querySelectorAll("tag.class") // selecciona todos los elementos que coincidan con la etiqueta y la clase
// $d.querySelector("tag#id") // selecciona el elemento que coincida con la etiqueta y el id
// $d.querySelectorAll("tag#id") // selecciona todos los elementos que coincidan con la etiqueta y el id
// $d.querySelector("tag.class#id") // selecciona el elemento que coincida con la etiqueta, la clase y el id
// $d.querySelectorAll("tag.class#id") // selecciona todos los elementos que coincidan con la etiqueta, la clase y el id

// Eventos

// $d.addEventListener("click", e => {
//     console.log("Click en el documento")
// })

// $d.addEventListener("mousemove", e => {
//     console.log("Movimiento del mouse")
// })

// $d.addEventListener("keydown", e => {
//     console.log("Tecla presionada")
// })

// // $d.addEventListener("keyup", e => {
//     console.log("Tecla liberada")
// })
