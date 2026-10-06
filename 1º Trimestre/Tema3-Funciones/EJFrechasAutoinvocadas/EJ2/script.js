'strict'

const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];


const numerosImpares = (array) => {
  let arrayImpares = [];
  for (const numero of array) {
    if (numero % 2 !== 0) {
      arrayImpares.push(numero);
    }
  }
  return arrayImpares;
}


console.log(numerosImpares(arrayEntrada)); // (4) [3, 5, 7, 23]