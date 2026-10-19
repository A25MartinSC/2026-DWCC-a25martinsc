'strict'
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0,);

console.log(sum);

