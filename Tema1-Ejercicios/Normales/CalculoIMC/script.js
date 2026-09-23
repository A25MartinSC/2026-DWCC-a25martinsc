// a. Peso y altura de dos personas
let peso1 = 70, altura1 = 1.75;
let peso2 = 60, altura2 = 1.65;

// b. Cálculo del IMC
let imc1 = peso1 / (altura1 * altura1);
let imc2 = peso2 / (altura2 * altura2);

// c. Comparación
if (imc1 > imc2) {
    console.log("O IMC (" + imc1 + ") da primeira persoa é maior que o da segunda persoa (" + imc2 + ")");
} else if (imc2 > imc1) {
    console.log("O IMC (" + imc2 + ") da segunda persoa é maior que o da primeira persoa (" + imc1 + ")");
} else {
    console.log("Ambas persoas teñen o mesmo IMC");
}







