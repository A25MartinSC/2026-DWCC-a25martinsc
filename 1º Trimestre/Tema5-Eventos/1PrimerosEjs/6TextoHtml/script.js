"use strict"

const btn = document.querySelector("button");
const texto = document.getElementById("texto")
const input = document.querySelector("input");


function hover() {
  console.log("O rato esta encima do boton");
}

function hovernt() {
  console.log("O rato non esta encima do boton");
}

function quitarTexto() {
  texto.style.display = "none"
}

function teclas() {
  if (texto.style.display == "none") {
    texto.style.display = ""
  }
  texto.append(`KeyboardEvent: key=' ${event.key} ' | code=' ${event.code} '`);

}
btn.addEventListener("mouseover", hover)
btn.addEventListener("mouseout", hovernt)
btn.addEventListener("click", quitarTexto)
input.addEventListener("keydown", teclas)
