'strict'

/**Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li> seguintes: */

const inserirIl = document.getElementById("one");

inserirIl.insertAdjacentHTML("beforeend", '<li>2</li><li>3</li>')
