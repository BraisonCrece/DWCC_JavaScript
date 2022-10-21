/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
*             mediante una ventana de alerta. Debemos comprobar que el valor introducido es una cadena
*
*
*   Entrada : nombre
*
*
*   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
*
*
***************************************************************************************************************/
let nombre = prompt("Introduce tu nombre: ")
isNaN(parseFloat(nombre)) ? alert(`Bienvenido a mi página ${nombre}`) : alert("Tipo de dato inválido")