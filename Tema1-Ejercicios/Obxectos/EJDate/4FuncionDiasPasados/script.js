'use strict'

function diasPasados(fecha) {

  let data = new Date(fecha);
  const comezo = new Date('January 1, 2026');

  const msPorDia = 1000 * 60 * 60 * 24;
  const dias = Math.floor((data.valueOf() - comezo.valueOf()) / msPorDia);

  return dias;
}
console.log(diasPasados('January 27, 2026'));




