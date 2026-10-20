'strict'

const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

const diasConM = dias.filter((dias) => dias.startsWith("m"));

console.log(diasConM);


const diasConS = dias.find((dias) => {
  if (dias.startsWith("s") == true) {
    console.log("Hay un dia que comeza por S");
  }
})

console.log(diasConS);




const diasTerminaS = dias.every((dias) => dias.endsWith("s"))

console.log(diasTerminaS);





const diasConMPrimero = dias.find((dias) => dias.startsWith("m"));

console.log(diasConMPrimero);

const posicionConMPrimero = dias.findIndex((dias) => dias.startsWith("m"));

console.log("La posicion del primero que empieza por *m* es " + posicionConMPrimero);

const diasMaiusculas = dias.map((dias) => dias.toUpperCase());

console.log(diasMaiusculas);
