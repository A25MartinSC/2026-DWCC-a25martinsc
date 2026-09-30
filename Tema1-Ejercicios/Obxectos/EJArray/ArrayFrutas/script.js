'use strict'

const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];

console.log(froitas.join(', '));


froitas.splice(1, 1);
console.log(froitas.join(', '));


froitas.splice(3, 0, 'laranxas', 'sandía');
console.log(froitas.join(', '));


froitas.splice(1, 1, 'cereixas', 'nésperas');
console.log(froitas.join(', '));