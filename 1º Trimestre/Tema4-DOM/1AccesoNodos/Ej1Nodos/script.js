'strict'
//● A táboa con id = "age-table".
const tablaEdad = document.getElementById("age-table")
console.log(tablaEdad);

//● Todos os elementos label dentro da táboa(debería haber 3).
const elementosLabel = tablaEdad.querySelectorAll("label")
console.log(elementosLabel);

//● O primeiro td da táboa.
const primeiroTd = tablaEdad.querySelector("td")
console.log(primeiroTd);

//● O formulario con name = "search".
const formularioBuscar = document.getElementsByName("search")[0]
console.log(formularioBuscar);

//● O primeiro input do formulario anterior.
const primeiroInput = document.querySelector("input")
console.log(primeiroInput);

//● O último input do formulario do apartado anterior.
const todosOsInputs = formularioBuscar.querySelectorAll("input");
const ultimoInput = todosOsInputs.lastElementCHild("input");
console.log(ultimoInput);









