'strict'

function validarDNI(dni) {

  if (dni.length == 9) {

    const letra = dni.slice(8).toUpperCase();
    const numeros = dni.slice(0, 8);

    const letrasValidas = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];


    let letra2 = numeros % 23;
    if (letra == letrasValidas[letra2]) {
      return true;
    } else {
      return false;
    }

  } else {
    return false;
  }
};

console.log(validarDNI("51273512A"));
