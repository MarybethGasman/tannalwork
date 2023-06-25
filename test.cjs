const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

function solve(game, action) {
  let merged;
  if (action === 0) {
    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].length; j++) {
        while (game[i][j] === 0) {
          game[i].splice(j, 1);
          game[i].push(0);
        }
        merged = new Array(4).fill(false);
        for (let j = 1; j < game[i].length; j++) {
          if (game[i][j] !== 0 && game[i][j] === game[i][j - 1] && !merged[j - 1]) {
            game[i][j - 1] *= 2;
            game[i][j] = 0;
            merged[j - 1] = true;
          }
        }
        while (game[i][j] === 0) {
          game[i].splice(j, 1);
          game[i].push(0);
        }
      }
    }
  } else if (action === 1) {
    game = transpose(game);
    for (let i = 0; i < game.length; i++) {
      while (game[i].length < 4) {
        game[i].push(0);
      }
      for (let j = 0; j < game[i].length; j++) {
        while (game[i][j] === 0) {
          game[i].splice(j, 1);
          game[i].push(0);
        }
        merged = new Array(4).fill(false);
        for (let j = 1; j < game[i].length; j++) {
          if (game[i][j] !== 0 && game[i][j] === game[i][j - 1] && !merged[j - 1]) {
            game[i][j - 1] *= 2;
            game[i][j] = 0;
            merged[j - 1] = true;
          }
        }
        while (game[i][j] === 0) {
          game[i].splice(j, 1);
          game[i].push(0);
        }
      }
    }
    game = transpose(game);
  } else if (action === 2) {
    for (let i = 0; i < game.length; i++) {
      for (let j = game[i].length - 1; j >= 0; j--) {
        while (game[i][j] === 0) {
          game[i].splice(j, 1);
          game[i].unshift(0);
        }
        merged = new Array(4).fill(false);
        for (let j = game[i].length - 2; j >= 0; j--) {
          if (game[i][j] !== 0 && game[i][j] === game[i][j + 1] && !merged[j + 1]) {
            game[i][j + 1] *= 2;
            game[i][j] = 0;
            merged[j + 1] = true;
          }
        }
        while (game[i][j] === 0) {
          game[i].splice(j, 1);
          game[i].unshift(0);
        }
      }
    }
  } else {
    game = transpose(game);
    for (let i = 0; i < game.length; i++) {
      game[i].reverse();
      while (game[i].length < 4) {
        game[i].push(0);
      }
      for (let j = 0; j < game[i].length; j++) {
        while (game[i][j] === 0) {
          game[i].splice(j, 1);
          game[i].push(0);
        }
        merged = new Array(4).fill(false);
        for (let j = 1; j < game[i].length; j++) {
          if (game[i][j] !== 0 && game[i][j] === game[i][j - 1] && !merged[j - 1]) {
            game[i][j - 1] *= 2;
            game[i][j] = 0;
            merged[j - 1] = true;
          }
        }
        while (game[i][j] === 0) {
          game[i].splice(j, 1);
          game[i].push(0);
        }
      }
      game[i].reverse();
    }
    game = transpose(game);
  }
  console.log(game.map(row => row.join(' ')).join('\n'));
}

void async function () {
  // Write your code heres
  let line
  let lines = []
  while ((line = await readline()) !== undefined) {
    lines.push(line);
  }
  let game = lines.splice(0, 4).map(v => v.split(' ').map(v => +v))
  let action = +lines.shift()
  solve(game, action)
}()
