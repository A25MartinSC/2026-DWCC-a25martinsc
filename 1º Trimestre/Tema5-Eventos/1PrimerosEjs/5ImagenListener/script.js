"use strict"

const imagen = document.querySelector("img");

function click() {
  imagen.style.height = "300px";
  console.log("La imagen se ha alargado");
}

function dblclick() {
  imagen.style.height = "250px";
  console.log("La imagen ha encogido");
}

function hover() {
  imagen.style.cursor = "pointer";
  console.log("El cursor ahora es un pointer");
}

function mouseup() {
  imagen.style.border = "40px solid pink";
  console.log("La imagen tiene un borde");
}

function down() {
  imagen.style.border = "";
  console.log("La imagen ya no tiene un borde");
}




imagen.addEventListener("click", click)
imagen.addEventListener("dblclick", dblclick)
imagen.addEventListener("mouseover", hover)
imagen.addEventListener("mouseup", mouseup)
imagen.addEventListener("mousedown", down)
