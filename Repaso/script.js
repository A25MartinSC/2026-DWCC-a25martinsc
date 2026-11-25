"use strict"

const formulario = document.getElementById("formularioCompra");
const input = document.getElementById("inputElemento");
const boton = document.getElementById("botonAnadir");
const ul = document.getElementById("listaCompra");

let elementos = [];

function añadir(event) {
    event.preventDefault();

    const texto = inputElemento.value.trim();

    if (texto === '') {
        return;
    }

    const li = document.createElement('li');
    li.textContent = texto;

    const borrar = document.createElement("button");
    borrar.textContent = "X"


    borrar.addEventListener("click", function () {
        if (window.confirm("Seguro?")) {
            li.remove();
        }
    });


    li.append(borrar);
    ul.append(li);

    input.value = '';
    input.focus();
}
formulario.addEventListener("submit", añadir)

botonBorrarTodo.addEventListener("click", function () {
    if (window.confirm("¿Seguro que quieres borrar toda la lista?")) {
        ul.innerHTML = ""; // Vacía el HTML de la lista
    }
});
me
// 3. FILTRAR ELEMENTOS
inputFiltro.addEventListener("input", function () {
    const textoFiltro = inputFiltro.value.toLowerCase();
    const items = ul.querySelectorAll("li");

    items.forEach(li => {
        const textoLi = li.firstChild.textContent.toLowerCase();

        if (textoLi.includes(textoFiltro)) {
            li.style.display = ""; // Se muestra
        } else {
            li.style.display = "none"; // Se oculta
        }
    });
});

