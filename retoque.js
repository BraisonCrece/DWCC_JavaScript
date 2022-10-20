function contar(cadena, posicion) {
  let i = posicion;
  while (i + 1 < cadena.length && cadena[i] == cadena[i + 1]) i++;
  return i - posicion + 1;
}

let ADN = prompt("Cadena ADN del virus");
let posicion = 0;
let mayor = 0;
let longitud = 0;

for (let i = 0; i < ADN.length; i += longitud) {
  longitud = contar(ADN, i);
  if (longitud >= mayor) {
    mayor = longitud;
    posicion = i;
    animoacido = ADN[i];
  }
}

console.log(`La longitud es: ${mayor}`);
console.log(`La posicion es: ${posicion + 1}`);
console.log(`El aminoacido es: ${animoacido}`);
console.log(
  `El virus desactivado es: ${
    ADN.substring(0, posicion) + ADN.substring(posicion + mayor, ADN.length)
  }`
);
