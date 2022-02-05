const { printPuzzle } = require("./Utils");

function solve(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] == 0) {
        for (let i = 1; i <= 9; i++) {
          const check = validate(board, i, row, col);
          if (check) {
            board[row][col] = i;
            if (solve(board)) {
              return true;
            }
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function validate(board, i, r, c) {
  for (let row = 0; row < 9; row++) {
    if (board[row][c] == i) {
      return false;
    }
  }
  for (let col = 0; col < 9; col++) {
    if (board[r][col] == i) {
      return false;
    }
  }
  for (let row = r - (r % 3); row < r - (r % 3) + 3; row++) {
    for (let col = c - (c % 3); col < c - (c % 3) + 3; col++) {
      if (board[row][col] == i) {
        return false;
      }
    }
  }
  return true;
}
function startGame(board) {
  getRandomBoard(board);
  printPuzzle(board);
  console.log();
  solve(board);
  const newBoard = createUnsolvedBoard(board);
  printPuzzle(newBoard);
  console.log();
  printPuzzle(board);
}

function createUnsolvedBoard(board) {
  const newBoard = board.map((item) => [...item]);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (Math.random() > 0.3) newBoard[i][j] = 0;
    }
  }
  return newBoard;
}
function getRandomBoard(board) {
  let i = 0;
  while (i < 9) {
    const num = Math.floor(Math.random() * 10);

    if (!board[0].includes(num)) {
      board[0][i] = num;

      i++;
    }
  }
}

const initBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 6, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
startGame(initBoard);
