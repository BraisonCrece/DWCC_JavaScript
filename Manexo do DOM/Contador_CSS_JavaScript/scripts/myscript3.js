let contador = 0;
const $d = document,
  $valor = $d.querySelector("#valor"),
  $botones = $d.querySelectorAll("button"),
  $contenedorBtn = $d.querySelector(".button-contenedor");

// Esta versión utililza un solo "listener", en el elemento padre común
// a los tres botones. Ya que nos podemos aprovechar de la propagación.
// una vez se lanza el evento, nos quedamos con el "target" que fué pulsado
$contenedorBtn.addEventListener("click", (e) => {
  const styles = e.target.classList;
  if (styles.contains("start")) contador--;
  else if (styles.contains("incrementar")) contador++;
  else contador = 0;

  $valor.innerHTML = contador;
});
