'strict'
tablero = [
  [-1, 0, , 0, 0],
  [0, 0, 0, 0],
  [0, -1, 0, 0],
  [0, 0, 0, 0]
];


function buscaminas(tablero) {
  //Inicializamos el array de minas
  //minas = new Array();
  minas = [];
  minas2 = [];


  for (i = 0; i < tablero.length; i++) {
    //Declaramos dinamicamente o array
    //minas[i] = new Array();
    minas[i] = [];
    minas2[i] = [];


    for (j = 0; j < tablero[i].length; j++) {
      if (tablero[i][j] === -1) {
        minas[i][j] = -1;
        minas2[i][j] = -1;
      }
    }

  }
}