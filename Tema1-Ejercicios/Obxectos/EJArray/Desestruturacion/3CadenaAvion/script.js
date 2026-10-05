const flightsInfo = "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

const vuelos = flightsInfo.split("+").map(flight => {

  const [tipo, origen, destino, horaVuelo] = flight.slice(1).split(";");

  const tipoFinal = tipo.replaceAll("_", " ");
  const origenFinal = origen.slice(0, 3).toUpperCase()
  const destinoFinal = destino.slice(0, 3).toUpperCase()
  const [horas, min] = horaVuelo.split(":");

  return `${tipoFinal} ${origenFinal} ${destinoFinal} (${horas}h${min})`;
});

let longitud = 0;

for (const linea of vuelos) {
  if (linea.length > longitud) {
    longitud = linea.length;
  }
}

for (const linea of vuelos) {
  console.log(linea.padStart(longitud));
}