'strict'

const minMax = array => {
  let minimo = 0;
  let maximo = 0;
  let contador = 0;

  for (const num of array) {

    if (contador == 0) {
      minimo = num;
      maximo = num;
      contador++;
    }

    if (num < minimo) {
      minimo = num;
    }

    if (num > maximo) {
      maximo = num;
    }

  }
  return { minimo, maximo }
}

console.log(minMax([1, 2, 3, 4, 5]));

