"use strict"

const botones = document.querySelectorAll("button");

for (const botonActual of botones) {
  function borrarTexto() {
    let anteriorP = botonActual.previousElementSibling;

    anteriorP.style.display = "none";
  }
  botonActual.addEventListener("click", borrarTexto)
}
