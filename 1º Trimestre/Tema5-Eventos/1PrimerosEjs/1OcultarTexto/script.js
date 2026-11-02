'use strict'

const textoOculto = document.getElementById("adicional")

textoOculto.style.display = "none";

const link = document.querySelector("a");

function quitarOculto() {

  textoOculto.style.display = "flex";
  link.style.display = "none";
}

link.addEventListener('click', quitarOculto);