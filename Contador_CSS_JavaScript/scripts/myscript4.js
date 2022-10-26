let segundos = 0;
let minutos = 0;
let horas = 0;
let id = null;

const $d = document,
  $segundos = $d.querySelector("#segundos"),
  $minutos = $d.querySelector("#minutos"),
  $horas = $d.querySelector("#horas"),
  $botones = $d.querySelectorAll("button"),
  $contenedorBtn = $d.querySelector(".button-contenedor");

function start() {
  segundos++;
  $segundos.innerHTML = segundos.toString().padStart(2, "0");
  if (segundos === 60) {
    segundos = 0;
    $segundos.innerHTML = segundos.toString().padStart(2, "0");
    minutos++;
    $minutos.innerHTML = minutos.toString().padStart(2, "0");
  }
  if (minutos === 60) {
    minutos = 0;
    $minutos.innerHTML = minutos.toString().padStart(2, "0");
    horas++;
    $horas.innerHTML = horas.toString().padStart(2, "0");
  }
}

function pause() {
  clearInterval(id);
}

function setAllZero() {
  segundos = 0;
  minutos = 0;
  horas = 0;
  segundos = $segundos.innerHTML = segundos.toString().padStart(2, "0");
  $minutos.innerHTML = minutos.toString().padStart(2, "0");
  $horas.innerHTML = horas.toString().padStart(2, "0");
}

$contenedorBtn.addEventListener("click", (e) => {
  const boton = e.target.classList;
  if (boton.contains("start")) {
    if (!id) {
      id = setInterval(start, 10);
      e.target.innerHTML = "pause";
    }
  }

  if (boton.contains("reset")) {
    clearInterval(id);
    id = null;
    setAllZero();
    e.target.nextElementSibling.textContent = "Start";
  }

  if (boton.contains("pause")) {
    clearInterval(id);
    id = null;
    e.target.innerHTML = "continue";
  }

  if (boton.contains("continue")) {
    e.target.innerHTML = "pause";
  }
});
