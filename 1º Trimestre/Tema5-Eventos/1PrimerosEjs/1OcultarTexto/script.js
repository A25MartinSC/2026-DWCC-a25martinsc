'use strict'

const textoOculto = document.getElementById("adicional")

textoOculto.style.visibility = "hidden";

const link = document.querySelector("a");

function quitarOculto() {

  textoOculto.style.visibility = "visible";
  link.style.visibility = "hidden";
}




link.addEventListener('click', quitarOculto);