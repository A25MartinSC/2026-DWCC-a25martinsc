'strict'

function buscarPatron(texto, patron) {

  let indiceTexto;
  //Contador de cantos encontramos
  let encontrados = 0;


  //Pasamos todo minusculas
  let textoM = texto.toUpperCase();
  let patronM = patron.toUpperCase();


  for (indiceTexto = 0; indiceTexto < textoM.length; indiceTexto++) {
    let numeroCoincidencias = 0;
    for (let indicePatron = 0; indicePatron < patronM.length; indicePatron++) {
      if (texto[indiceTexto + indicePatron] == patron[indicePatron]) {
        numeroCoincidencias++;
      }
      if (numeroCoincidencias == patron.length) {
        //Coincidencia encontrada
        encontrados++;
      }
    }
  }
  return encontrados;
}

console.log(buscarPatron("holanfholaholdsddholaholadijhola", "hola")); 