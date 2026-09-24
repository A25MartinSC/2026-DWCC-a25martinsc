function Enmascarar(cadena) {
  let cadenaEnmascarada = "";
  let longitud = cadena.length;
  let mascara = "*";

  for (let i = 0; i <= longitud - 5; i++) {
    cadenaEnmascarada = cadenaEnmascarada + mascara;
  }
  cadenaEnmascarada = cadenaEnmascarada + cadena.slice(-4);
  return cadenaEnmascarada;
}

console.log(Enmascarar("1234123412347777"));



