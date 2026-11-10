"use strict"

const arbol = document.getElementById("tree");


function ocultar(event) {
    const elemento = event.target;

    const hijos = elemento.querySelector("ul");

    if (hijos !== null) {
        if (hijos.style.display === "none") {
            hijos.style.display = "";
        } else {
            hijos.style.display = "none";
        }
    }
}

arbol.addEventListener("click", ocultar);