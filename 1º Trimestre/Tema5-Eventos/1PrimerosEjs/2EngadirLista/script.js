'use strict'

const texto = document.querySelector('input');
const btn = document.querySelector('button');
const lista = document.querySelector('ul');

function añadir() {
  if (texto.value != 0) {
    let li = document.createElement('li');
    lista.append(li);
    li.append(texto.value);
  }
}
texto.value = "";
texto.focus();

btn.addEventListener('click', añadir);