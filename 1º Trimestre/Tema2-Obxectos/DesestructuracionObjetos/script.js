'strict'

const game = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
};


for (const [index, player] of game.scored.entries()) {
  console.log(`Gol ${index + 1}: ${player}`);
}

const scorers = {};
for (const xogador of game.scored) {
  if (scorers[xogador]) {
    scorers[xogador]++; //si ya esta se suma uno
  } else {
    scorers[xogador] = 1; //sino pasa al siguiente
  }
}

console.log(scorers);
