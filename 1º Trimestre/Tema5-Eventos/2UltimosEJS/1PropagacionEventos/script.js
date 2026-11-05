'use strict';

// Engade un event listener ao boton con id "btnAccion" que mostre un alert ao facer click

const botonA = document.getElementById("btnAccion");

function alerta() {
  alert("Esto es una alerta!")
}

botonA.addEventListener("click", alerta);

// Cada vez que se fai click no boton "Alternar clase" fai que se engada/elimine a clase "resaltado" no div con id "mensaxe".
const botonClase = document.getElementById("btnAlternar");
const mensaxe = document.getElementById("mensaxe");

function quitarClase() {
  if (mensaxe.classList != "resaltado") {
    mensaxe.classList.add("resaltado");
  } else {
    mensaxe.classList.remove("resaltado");
  }
}

botonClase.addEventListener("click", quitarClase);

// Mostra por consola o valor do input cando se pulse o boton "Enviar" do formulario. A continuacion elimina o texto introducido no input
const input = document.getElementById("entradaTexto");

const botones = document.querySelectorAll("button");
const enviar = botones[botones.length - 1];

function mostrarInfo(e) {
  e.preventDefault();
  console.log(input.value);
  input.value = "";
}

enviar.addEventListener("click", mostrarInfo);