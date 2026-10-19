'strict'
const array = [1, 2, 3, 4, 5, -8];

const lowest = array.reduce((acc, valor) => (acc < valor ? acc : valor));
console.log(`O numero menor e ${lowest}`)