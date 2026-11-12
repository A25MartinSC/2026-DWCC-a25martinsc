"use strict"

const caja = document.getElementById("name")

function color() {
  caja.style.backgroundColor = "red";
}

function noColor(e) {
  caja.style.backgroundColor = "";

  if (e.target.value === '') {
    console.log("Non se escribiu nada");

  }
}

caja.addEventListener("focus", color)
caja.addEventListener("blur", noColor)