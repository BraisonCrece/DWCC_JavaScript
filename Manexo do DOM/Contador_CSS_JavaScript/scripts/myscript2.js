let contador = 0;
const $d = document,
  $valor = $d.querySelector("#valor"),
  $botones = $d.querySelectorAll("button"),
  $contenedorBtn = $d.querySelector(".button-contenedor");

// En esta versión estamos seleccionando todos los botones con el selector
// "querySelectorAll", e iteramos sobre esta colecciøn de botones (array),
// asignandole un "eventListener" a cada uno de ellos, diferenciandolos por sus
// clases, y modificando el valor de contador en consecuencia
$botones.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.target.classList;
    if (styles.contains("decrementar")) contador--;
    else if (styles.contains("incrementar")) contador++;
    else contador = 0;
    if (contador > 0) $valor.style.color = "green";
    if (contador < 0) $valor.style.color = "red";
    if (contador === 0) $valor.style.color = "#222";
    $valor.innerHTML = contador;
  });
});
