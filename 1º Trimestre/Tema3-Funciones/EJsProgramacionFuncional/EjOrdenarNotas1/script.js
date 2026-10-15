'strict'
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];



const initialValue = 0;
const sumWithInitial = objects.price.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

