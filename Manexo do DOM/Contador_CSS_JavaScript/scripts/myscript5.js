const $d = document,
  $segundos = $d.querySelector("#segundos"),
  $minutos = $d.querySelector("#minutos"),
  $horas = $d.querySelector("#horas"),
  $botones = $d.querySelector(".button-contenedor");

const rellenar = (num, $domElement) => {
  const vector = Array.from(
    { length: num },
    (el, indice) => (el = indice.toString().padStart(2, "0"))
  );
  vector.forEach((el) => {
    let $option = $d.createElement("option");
    $option.append(el);
    $option.setAttribute("value", el);
    $domElement.appendChild($option);
  });
};

rellenar(60, $segundos);
rellenar(60, $minutos);
rellenar(24, $horas);

let segundos,
  minutos,
  horas = 0;
let cronometro = null;

$segundos.addEventListener("change", (e) => {
  segundos = $segundos.value;
});

$minutos.addEventListener("change", (e) => {
  minutos = $minutos.value;
});

$horas.addEventListener("change", (e) => {
  horas = $horas.value;
});

function printValues() {
  $horas.value = horas.toString().padStart(2, "0");
  $minutos.value = minutos.toString().padStart(2, "0");
  $segundos.value = segundos.toString().padStart(2, "0");
}

function setAllZero() {
  segundos = 0;
  minutos = 0;
  horas = 0;
  $segundos.value = segundos.toString().padStart(2, "0");
  $minutos.value = minutos.toString().padStart(2, "0");
  $horas.value = horas.toString().padStart(2, "0");
}

function start() {
  segundos--;
  if (segundos < 0) {
    minutos--;
    segundos = 59;
    if (minutos < 0) {
      horas--;
      minutos = 59;
      if (horas < 0) {
        horas = minutos = segundos = 0;
        clearInterval(cronometro);
        alert("FIN");
      }
    }
  }
  printValues();
}

$botones.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "start":
      if (!cronometro) {
        cronometro = setInterval(start, 1000);
        e.target.textContent = "Stop";
      } else {
        clearInterval(cronometro);
        cronometro = null;
        e.target.textContent = "continue";
      }
      break;
    case "reset":
      if (cronometro) clearInterval(cronometro);
      setAllZero();
      cronometro = null;
      e.target.nextElementSibling.textContent = "Start";
  }
});
