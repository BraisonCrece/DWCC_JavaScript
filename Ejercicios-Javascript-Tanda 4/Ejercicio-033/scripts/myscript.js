/***************************************************************************************************************
 *
 *   Objetivo: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
 *             P.j: Dabale arroz a la zorra el abad
 *
 *
 *   Entrada : Cadena de texto
 *
 *
 *   Salida  : La cadena .... (es|no es) un palíndromo
 *             ¿Podríamos resolverlo empleando métodos de Array?
 *             ¿Podríamos resolverlo empleando recursividad?
 *
 ***************************************************************************************************************/
let input = "Dabale arroz a la zorra el abad";

const palindromo = (input) =>
  input
    .split("")
    .filter((x) => x !== " ")
    .map((x) => x.toLowerCase())
    .toString() ===
  input
    .split("")
    .filter((x) => x !== " ")
    .map((x) => x.toLowerCase())
    .reverse()
    .toString();
