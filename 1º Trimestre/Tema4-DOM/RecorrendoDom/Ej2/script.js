'strict'

const nodoDiv = document.lastChild.nextSibling;
console.log(nodoDiv);
//Si, xa que nextSibling semre devolve null se o nodo actual xa e o ultimo.

const nodoUl = document.children[0].previousSibling;
console.log(nodoUl);

//No, si que devolve algo.


