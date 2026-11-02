'use strict'
const button = document.querySelector('button');

button.addEventListener("click", () => console.log("1"));
button.removeEventListener("click", () => console.log("1"));
button.onclick = () => console.log(2);

//Se ejecutan el primero y tercero, el remove no se ejecuta ya que al no especificar qe
//evento es, el remove no sabe a cual se refiere para borrar