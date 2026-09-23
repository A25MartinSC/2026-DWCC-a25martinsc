function calcularPrecioFinal(precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}

// Prueba de la función
let precioOriginal = 100;
let porcentajeDescuento = 20;
let resultado = calcularPrecioFinal(precioOriginal, porcentajeDescuento);

console.log("Prezo orixinal: " + precioOriginal + "€");
console.log("Desconto: " + porcentajeDescuento + "%");
console.log("Prezo final: " + resultado + "€");