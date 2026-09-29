'use strict'

function diasMes(numAno, numMes) {

  let numDias = 0;
  switch (numMes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numDias = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      numDias = 30;
      break;
    case 2:
      if (numAno % 4 == 0) {
        numDias = 29;
      } else {
        numDias = 28;
      }
      break;
    default:
      console.log("Mes no valido");
      break;
  }
  return numDias;
}

console.log(diasMes(2024, 2));




