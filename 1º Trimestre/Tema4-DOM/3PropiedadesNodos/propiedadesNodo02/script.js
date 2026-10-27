'strict'

//O número de ligazóns da páxina.
const numLigazons = document.querySelectorAll('a');

console.log(numLigazons.length);

//A dirección da penúltima ligazón.
const penultima = numLigazons[numLigazons.length - 2];

console.log(penultima.href);

// O número de ligazóns que apuntan a http://proba
const ligazonsProba = document.querySelectorAll('a[href="http://proba"]');

console.log(ligazonsProba.length);

//O número de ligazóns do terceiro parágrafo.
const paragrafos = document.querySelectorAll('p');
const ligazonsTerceiroParagrafo = paragrafos[2].querySelectorAll('a');

console.log(ligazonsTerceiroParagrafo.length);

//Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o texto de cor laranxa.
ligazonsProba.forEach(ligazon => {
    ligazon.style.color = "orange";
});
