module.exports = {
  printPuzzle: function (board) {
    for (let i = 0; i < board.length; i++) {
      console.log(...board[i]);
    }
  },
};
