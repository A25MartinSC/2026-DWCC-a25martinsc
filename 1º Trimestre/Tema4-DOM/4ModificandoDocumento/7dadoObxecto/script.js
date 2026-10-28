'use strict';

let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      'apple tree': {},
      magnolia: {},
    },
  },
};

function createTree(data) {

  let ul = document.createElement('ul');

  for (let valor in data) {
    let li = document.createElement('li');
    li.textContent = valor;



    ul.append(li);
  }

  return ul;
}

let listaHTML = createTree(arbore);
document.body.append(listaHTML);