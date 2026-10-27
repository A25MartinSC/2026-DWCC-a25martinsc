'strict'

//O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:
const etiquetaEscolle = document.querySelectorAll('label')[3];
console.log(etiquetaEscolle.innerHTML);
console.log(etiquetaEscolle.innerText);
console.log(etiquetaEscolle.textContent);

//O valor do primeiro input de sexo
const primeiroInputSexo = document.querySelector('input[name="sexo"]');

console.log(primeiroInputSexo.value);


//O valor do sexo que estea seleccionado.
const inputSeleccionado = document.querySelector('input[name="sexo"]:checked');
console.log(inputSeleccionado.value);

//O texto de cada un dos elementos < li >
const elementosLi = document.querySelectorAll('li');
console.log(elementosLi);


//Indica cantos elementos < li > hai.
const numElementosLi = document.querySelectorAll('li');
console.log(numElementosLi.length);


//Indica o valor do atributo data - widget - name
const divWidget = document.querySelector('[data-widget-name]');
console.log(divWidget.dataset.widgetName);
