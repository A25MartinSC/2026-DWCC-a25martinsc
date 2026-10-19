'strict'
const num = [4, 8, 3, 10, 5, -4, 19280238092];


function compareNumbers(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
const funcionOrdenar = array => array.sort(compareNumbers);
console.log(funcionOrdenar(num));

