'strict'
const num = [4, 8, 3, 10, 5, -4, 192];


function compareNumbers(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}



const funcionOrdenar = array => {
  array.sort(compareNumbers);
  return array.at(0);
}
console.log(funcionOrdenar(num));

