"use strict"

const imagen = document.querySelector("img");
const body = document.querySelector("body");
const p = document.querySelector("p");

function click() {
  imagen.style.height = "500px";
  console.log("La imagen se ha alargado");
}

function dblclick() {
  imagen.style.height = "250px";
  console.log("La imagen ha encogido");
}

function menu() {
  body.style.backgroundColor = "blue";
  console.log("El fondo es azul");
}

function mouseup() {
  imagen.style.border = "40px solid pink";
  console.log("La imagen tiene un borde");
}

function down() {
  imagen.style.border = "";
  console.log("La imagen ya no tiene un borde");
}

function wheel() {
  body.style.backgroundColor = "";
  console.log("El fondo es blanco");
}

function hover() {
  imagen.style.cursor = "pointer";
  console.log("El cursor ahora es un pointer");
}

function hovernt() {
  imagen.style.borderRadius = "20px";
  console.log("La imagen tiene borde redondeado");
}

function start() {
  p.style.display = "none";
  console.log("El texto se ha ido");
}

function drag() {
  body.style.backgroundColor = "green";
  console.log("El fondo es verde");
}

function end() {
  body.style.backgroundColor = "red";
  p.style.display = "";
  console.log("El fondo es rojo y el texto ha vuelto");
}



imagen.addEventListener("click", click)
imagen.addEventListener("dblclick", dblclick)
imagen.addEventListener("contextmenu", menu)
imagen.addEventListener("mouseup", mouseup)
imagen.addEventListener("mousedown", down)
imagen.addEventListener("wheel", wheel)
imagen.addEventListener("mouseover", hover)
imagen.addEventListener("mouseout", hovernt)
imagen.addEventListener("dragstart", start)
imagen.addEventListener("drag", drag)
imagen.addEventListener("dragend", end)