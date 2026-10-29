'use strict'

const texto = document.querySelector('input');
const btn = document.querySelector('button');
const lista = document.querySelector('ul');

function añadir() {
  let li = document.createElement('li');
  lista.append(li);
  li.append(texto.value);
}

btn.addEventListener('click', añadir);