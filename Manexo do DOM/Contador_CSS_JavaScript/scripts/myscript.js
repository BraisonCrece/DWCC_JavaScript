let contador = 0;
const $d = document,
  $valor = $d.querySelector("#valor"),
  $botones = $d.querySelectorAll("button"),
  $contenedorBtn = $d.querySelector(".button-contenedor");

// En esta versión estamos seleccionando todos los botones con el selector
// "querySelectorAll", e iteramos sobre esta colecciøn de botones (array),
// asignandole un "eventListener" a cada uno de ellos, diferenciandolos por su
// ID, y modificando el valor de contador en consecuencia
$botones.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "plus":
        contador++;
        break;
      case "minus":
        contador--;
        break;
      case "reset":
        contador = 0;
    }
    switch (true) {
      case contador > 0:
        $valor.style.color = "green";
        break;
      case contador < 0:
        $valor.style.color = "red";
        break;
      case contador === 0:
        $valor.style.color = "#222";
        break;
    }
    $valor.textContent = contador;
  });
});
