/* El ADN de un virus está formado esencialmente por una secuencia 4 aminoácidos:
• Glicina, representada por la letra G
• Tianina, representada por la letra T
• Alanina, representada por la letra A
• Cisteína, representada por la letra C
Los científicos han descubierto recientemente que la mejor forma de desactivar el carácter
virulento del virus es determinar la subcadena de mayor longitud de cualquiera de los
aminoácidos de su ADN y extirparla.
Dado que las secuencias de ADN de los virus pueden tener cientos de aminoácidos, nuestro
objetivo es ayudarlos creando una página web que después de solicitar la secuencia de ADN
del virus al científico indique:
• El aminoácido que tiene la secuencia más larga dentro del ADN del virus
• La posición o inicio de esa cadena en el ADN del virus
• La longitud de esa secuencia dentro del ADN del virus
• El ADN del virus una vez desactivada su virulencia
Así, por ejemplo, si un científico indicara que el ADN de un virus es AAGGGGTC, la
página debería mostrar los siguientes mensajes:
• La secuencia más larga corresponde al aminoácido G
• La secuencia se produce a partir de la 3 posición del ADN del virus
• La longitud de la secuencia de aminoácido más larga es 4.
• El ADN del virus desactivado es AATC
En caso de haber dos o más subcadenas de igual longitud, la última subcadena es la
que determina el carácter virulento. */


let adnVirus = "AAGGGGTC"

const subcadenas = (cadena) => {
    let out = {}
    let maisLonga = 0
    let cadeaMaisLonga = ""
    let index = 0
    let cadenaTotal = cadena.split("")
    let cadenaAmino = []
    cadenaTotal.forEach( (amino, i) => {
        cadenaAmino.push(amino)
        if(cadenaTotal[i+1] !== amino) {
            out[cadenaAmino.toString().replaceAll(",","")] = {"comezo":index,"lonxitude":cadenaAmino.length}
            if(cadenaAmino.length > maisLonga) {
                maisLonga = cadenaAmino.length
                cadeaMaisLonga = cadenaAmino.toString().replaceAll(",","")
                console.log(cadeaMaisLonga);
            }
            cadenaAmino = []
            index = i+1

        }
   })
   return out[cadeaMaisLonga]
}

const subMaisLonga = subcadenas(adnVirus)

