const $d = document,
  $template = $d.querySelector("#libro").content,
  $contenedorLibros = $d.querySelector("#libros-container").querySelector("ul"),
  $buscar = $d.forms["buscarLibros"].querySelector("input"),
  $addLibro = $d.forms["libro-add"],
  $ocultar = $d.querySelector("#ocultar")

console.log($contenedorLibros)
let libros = [
  "Agile web development with Ruby on Rails",
  "Understanding ECMAScript",
  "The pragmatic programmer",
  "Clean code",
  "Grokking algorithms"
]

let fragmento = $d.createDocumentFragment()
libros.forEach((libro) => {
  let $libro = $template.cloneNode(true)
  $libro.querySelector(".titulo").append(libro)
  fragmento.appendChild($libro)
})
$contenedorLibros.appendChild(fragmento)

$ocultar.addEventListener("click", (e) => {
  if (e.target.checked) {
    $contenedorLibros.style.display = "none"
  } else {
    $contenedorLibros.style.display = "initial"
  }
})

$addLibro.addEventListener("submit", (event) => {
  event.preventDefault()
  let $input = $addLibro.querySelector("#add").value
  libros.push($input)
  let $libro = $template.cloneNode(true)
  $libro.querySelector(".titulo").append($input)
  $contenedorLibros.append($libro)
  $addLibro.reset()
})

$btnBorrar = $d.querySelectorAll(".borrar")

$contenedorLibros.addEventListener("click", (e) => {
  if (e.target.className === "borrar") {
    $libro_borrar = e.target.parentElement
    $contenedorLibros.removeChild($libro_borrar)
  }
})

$buscar.addEventListener("keyup", (e) => {
  let text = e.target.value.toLowerCase()
  console.log(text)
})
