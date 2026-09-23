let numero = 5;
let factorial = 1;

for (let i = numero; i >= 1; i--) {
    factorial *= i;
}

console.log(numero + "! = " + factorial);