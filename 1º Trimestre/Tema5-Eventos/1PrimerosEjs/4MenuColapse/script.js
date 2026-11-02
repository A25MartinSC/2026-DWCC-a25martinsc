"use strict"

const p = document.querySelector('p');
const lista = document.getElementById("lista");

function cursor() {
  p.style.cursor = "pointer";
}

function colapsar() {
  if (lista.style.display == "") {
    lista.style.display = "none";
  } else {
    lista.style.display = ""
  }
}

p.addEventListener("mouseover", cursor);
p.addEventListener("click", colapsar);