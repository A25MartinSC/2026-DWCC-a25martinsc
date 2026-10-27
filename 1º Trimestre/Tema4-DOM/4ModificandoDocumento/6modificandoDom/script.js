'use strict';

// Engade a clase CSS "color-title" ao elemento con id "tituloPrincipal" 
const vermello = document.getElementById('tituloPrincipal')
const vermelloTitulo = vermello.classList;

vermelloTitulo.add("color-title");
// Crea un novo elemento <li> coa clase CSS "item-lista" e o texto "Item 5". Engade este elemento Ã¡ lista desordenada
const lista = document.getElementById("lista");

const engadirLi = lista.insertAdjacentHTML("beforeend", '<li class="item-lista">Item 5</li>')
// Modifica o ancho do div con id "contedor" a 800px usando JavaScript 
const contenedor = document.getElementById("contedor");

contenedor.style.width = '800px';

// Cambia o valor do atributo "placeholder" do input a "Escribe aquÃ­..." 
const cajaTexto = document.getElementById("entradaTexto");

cajaTexto.setAttribute("placeholder", "Escribe aqui...");

// Selecciona a lista con id "lista" e cÃ¡mbialle o tamaÃ±o da fonte a 18px
const lista2 = document.getElementById("lista");

lista2.style.fontSize = "18px";

// Elimina o segundo elemento da lista (Item 2)
const items = document.querySelectorAll("li");

items[1].remove();

// Insire un novo parÃ¡grafo co texto "Texto dinÃ¡mico" despois do elemento con id "mensaxe" 
const texto = document.getElementById("mensaxe");

const engadirMensaxe = texto.insertAdjacentHTML("afterend", '<p>Texto dinamico</p>')

