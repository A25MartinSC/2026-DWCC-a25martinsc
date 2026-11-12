"use strict"

const lista = document.getElementById("ul");

function resaltar(event) {

  const li = event.target.closest("li");

  const liMarcado = event.currentTarget.querySelector(".selected")
  if (liMarcado && liMarcado !== li) {
    liMarcado.classList.remove("selected")
  }
  /*
  if (li) {
    if (!event.ctrlKey && !event.metaKey) {
      let seleccionados = lista.querySelectorAll('.selected');
      for (const elemento of seleccionados) {
        elemento.classList.remove("selected")
      }
    } */
  li.classList.toggle("selected")
}
//}

lista.addEventListener("click", resaltar)