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

let lista = createTree(arbore);
document.body.append(lista);


function createTree(data) {

  if (Object.keys(data).length === 0) return;


  let ul = document.createElement('ul');


  for (let valor in data) {
    let li = document.createElement('li');
    li.innerText = valor;
    let fillos = createTree(data[valor]);
    if (fillos) li.append(fillos);
    ul.append(valor)
  }

  return ul;
}

