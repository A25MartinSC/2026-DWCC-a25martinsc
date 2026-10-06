'strict'

const sumaValores = (...numeros) => {
  let total = 0;
  for (const num of numeros) {
    total += num;
  }
  return total;
}

console.log(sumaValores(1, 2, 3, 4, 5, 5));

