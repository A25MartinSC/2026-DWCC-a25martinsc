"use strict"

// const intervalID = setInterval(escribirNumeros, 1000, 1, 10);
//const intervalID = setInterval(chamarFuncion, 1000);

// function chamarFuncion() {
//   escribirNumeros(1, 10)
// }

function escribirNumeros(desde, ata) {
  const intervalID = setInterval(() => {
    if (desde <= ata) {
      console.log(desde);
      desde = desde + 1;
    } else {


      clearInterval(intervalID);

    }
  }, 1000);
}

escribirNumeros(1, 5)





