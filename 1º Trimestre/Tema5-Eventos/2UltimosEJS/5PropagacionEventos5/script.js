"use strict"

const contenido = document.getElementById("contents")


function preguntar(event) {

  const enlace = event.target.closest("a");

  if (enlace !== null) {
    event.preventDefault();

    if (window.confirm("Do you want to open in new tab?")) {
      window.open(enlace.href);
    }
  }
}

contenido.addEventListener("click", preguntar)