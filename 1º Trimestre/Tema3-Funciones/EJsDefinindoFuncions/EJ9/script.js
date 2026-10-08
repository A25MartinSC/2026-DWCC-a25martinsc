'strict'

function buscarPatron(texto, patron) {
  texto1 = texto.toLowerCase();
  patron1 = patron.toLowerCase();
  let contador = 0;

  for (let i = 0; i <= texto1.length; i++) {
    if (texto1.charAt(i) == patron1.charAt(i)) {
      if (texto1.slice(i, i + patron1.length)) {
        contador = contador + 1;
      }
    }
  }
  return contador;
}

console.log(buscarPatron("holanfholaholdsddholaholadijhola", "HOLA")); 