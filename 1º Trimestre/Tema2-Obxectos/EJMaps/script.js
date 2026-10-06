'use strict'

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

let eventos = [];

for (const value of gameEvents.values()) {
  eventos.push(value); //Metemos los datos de value en un array
}
//Pasamos el array a un coleccion para eliminar repetidos
let evento = new Set(eventos);

console.log(evento);

//Se recorren todos los datos del mapa
for (const [min, evento] of gameEvents) {
  //Segun el valor de key se imprimen en primera o segunda parte
  if (min <= 45) {
    console.log(`Primera parte: ${min} : ${evento}`);
  } else {
    console.log(`Segunda parte: ${min} : ${evento}`);
  }
}




