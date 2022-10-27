const $d = document,
  $segundos = $d.querySelector("#segundos"),
  $minutos = $d.querySelector("#minutos"),
  $horas = $d.querySelector("#horas"),
  $botones = $d.querySelector(".button-contenedor");

let horas = 0;

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
