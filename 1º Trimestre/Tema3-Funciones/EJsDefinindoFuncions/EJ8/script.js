'strict'

function cambioDinero(dinero) {
  let billete100 = 0;
  let billete50 = 0;
  let billete20 = 0;
  let billete10 = 0;
  let billete5 = 0;
  let moneda1 = 0;
  let moneda2 = 0;

  while (dinero > 100) {
    dinero = dinero - 100;
    billete100 = billete100 + 1;
  }
  while (dinero >= 50) {
    dinero = dinero - 50;
    billete50 = billete50 + 1;
  }

  while (dinero >= 20) {
    dinero = dinero - 20;
    billete20 = billete20 + 1;
  }

  while (dinero >= 10) {
    dinero = dinero - 10;
    billete10 = billete10 + 1;
  }

  while (dinero >= 5) {
    dinero = dinero - 5;
    billete5 = billete5 + 1;
  }

  while (dinero >= 2) {
    dinero = dinero - 2;
    moneda2 = moneda2 + 1;
  }


  while (dinero >= 1) {
    dinero = dinero - 1;
    moneda1 = moneda1 + 1;
  }

  return `A cantidade son ${billete100} billetes de 100, ${billete50} billetes de 50, ${billete20} billetes de 20, ${billete10} billetes de 10, ${billete5} billetes de 5 e ${moneda2} de 2 euros y ${moneda1} de 1 euro,`;
}


console.log(cambioDinero(454));