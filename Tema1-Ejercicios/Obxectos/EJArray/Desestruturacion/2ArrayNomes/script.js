'use strict'

function mayusculasLetra(frase) {
  const palabras = frase.toLowerCase().split(' ');
  const resultado = [];

  for (const palabra of palabras) {

    if (palabra.length > 0) {
      const palabraMayus = palabra.charAt(0).toUpperCase() + palabra.slice(1);

      resultado.push(palabraMayus);
    }
    else {
      resultado.push(' ');
    }
  }
  return resultado.join(' ');
}

console.log(mayusculasLetra("soy el amo de la mazmorra"))

