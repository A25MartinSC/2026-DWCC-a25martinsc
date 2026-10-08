'strict'

const mediaNumeros = (...numeros) => {
  let total = 0;
  let media = 0;
  let contador = 0;
  for (const num of numeros) {
    total += num;
    contador++;
  }
  return media = total / contador;
}

console.log(mediaNumeros(1, 2));

