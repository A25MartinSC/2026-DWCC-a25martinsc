'use strict'

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

function indices(elemento, arrayElementos) {
  let resultado = [];

  for (let i = 0; i < arrayElementos.length; i++) {

    if (arrayElementos[i] === elemento) {
      resultado.push(i);
    }
  }

  return resultado;
}

console.log(indices(1, numeros)); 