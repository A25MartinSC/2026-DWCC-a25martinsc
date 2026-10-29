'strict'
//2. Dada unha lista <ol> con varios elementos <li>, crea o código necesario para
//eliminar todos os < li > da lista.
const lista = document.getElementById('lista')
let listaArray = Array.from(lista);

for (const elemento of listaArray) {
  elemento.remove()
}








