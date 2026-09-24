
function reverseString(cadena) {
  let cadenaInversa = "";
  let longitud = cadena.length - 1;

  for (let i = longitud; i >= 0; i--) {
    cadenaInversa = cadenaInversa + cadena.at(i);
  }
  return cadenaInversa;
}

console.log(reverseString("Buenos dias"));




