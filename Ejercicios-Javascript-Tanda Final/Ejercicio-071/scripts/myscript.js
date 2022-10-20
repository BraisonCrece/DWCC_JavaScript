/***************************************************************************************************************
*  
*   Objetivo: Coleccion Musical. Tenemos un objeto que representa una parte de nuestra coleccion de albunes musicales
*             Cada album tiene un único identificador id como clave y varias propiedades. No todos los albunes tiene informacion completa
*             Tenemos que hacer la funcion actualizarAlbunes al que se le pasa el objeto con la coleccion de albunes, un id, una propìedad (como artista o pistas), y un valor
*             para modificar la coleccion de acuerdo con las siguientes reglas:
*                     - La funcion debe devolver siempre el objeto con la coleccion completa
*                     - Si la propiedad no es pistas y el valor no es una cadena vacia, actualizamos o establecemos a valor la propiedad indicada del album.
*                     - Si la propiedad es pistas pero el album no tiene la propiedad pistas, le asignamos a pistas un array con ese valor.

*                     - Si la propiedad es pistas y el valor no es una cadena vacia, añadimos el valor al final del array de pistas (salvo que ya existiera en pistas, en cuyo caso no haríamos nada)
*                     - Si el valor es una cadena vacia, borramos la propiedad del album
*
*   Entrada : --
*
*
*   Salida  : Despues de actualizaAlbules(coleccion, 5439, "artista", "ABBA"), artista debería ser "ABBA"
*             Despues de actualizaAlbules(coleccion, 5439, "pistas", "Take a Chance on Me"), añadimos la propiedad pistas, que debería tener un array con "Take a Chance on Me" como ultimo elemento.
*             Despues de actualizaAlbules(coleccion, 2548, "artista", ""), se debería borrar artista 
*             Despues de actualizaAlbules(coleccion, 1245, "pistas", "Addicted to Love"), pistas debería tener "Addicted to Love" como ultimo elemento.
*             Despues de actualizaAlbules(coleccion, 2468, "pistas", "Free"), pistas debería tener "1999" como primer elemento.
*             Despues de actualizaAlbules(coleccion, 2548, "pistas", ""), pistas debería vaciarse
*             Despues de actualizaAlbules(coleccion, 1245, "titulo", "Riptide"), titulo debería ser "Riptide"
*
***************************************************************************************************************/

const coleccionAlbunes = {
    2548: {
      titulo: 'Slippery When Wet',
      artista: 'Bon Jovi',
      pistas: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      titulo: '1999',
      artista: 'Prince',
      pistas: ['1999', 'Little Red Corvette']
    },
    1245: {
      artista: 'Robert Palmer',
      pistas: []
    },
    5439: {
      titulo: 'ABBA Gold'
    }
  };

  // - Si la propiedad no es pistas y el valor no es una cadena vacia, actualizamos o establecemos a valor la propiedad indicada del album.
  // - Si la propiedad es pistas pero el album no tiene la propiedad pistas, le asignamos a pistas un array con ese valor.  
  // - Si la propiedad es pistas y el valor no es una cadena vacia, añadimos el valor al final del array de pistas (salvo que ya existiera en pistas, en cuyo caso no haríamos nada)
  // - Si el valor es una cadena vacia, borramos la propiedad del album
  
  function actualizarAlbunes(coleccion, id, prop, valor) {
    if (valor !== "") {
      if (prop !== "pistas") {
        coleccion[id][prop] = valor;
      } else {
        if (coleccion[id].hasOwnProperty("pistas")) {
          if (!coleccion[id].pistas.includes(valor)) {
            coleccion[id].pistas.push(valor);
          }
        } else {
          coleccion[id].pistas = [valor];
        }
      }
    } else {
      delete coleccion[id][prop];
    }
    return coleccion;
  }
  
  actualizarAlbunes(coleccionAlbunes, 5439, 'artista', 'ABBA');