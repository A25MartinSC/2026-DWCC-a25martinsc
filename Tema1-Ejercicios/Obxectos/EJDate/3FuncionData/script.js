'use strict'

function diaSemana(fecha) {

  let dia = new Date(fecha);

  switch (dia.getDay()) {
    case 6:
    case 0:
      return true;
      break;
    default:
      return false;
      break;
  }
  return numDias;
}
console.log(diaSemana('June 27, 2026'));




