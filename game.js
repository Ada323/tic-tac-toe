var prompt = require('prompt');

var board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

// horizontal win combos: [0, 1, 2], [3, 4, 5], [6, 7, 8]
// vertical win combos: [0, 3, 6] [1, 4, 7], [2, 5, 8]
// diagonal win combos: [0, 4, 8], [2, 4, 6]

var win = null;

prompt.start();

function printBoard() {
  console.log('\n' +
    '  ' + board[0] + ' | ' + board[1] + ' | ' + board[2] + '\n' +
    ' -----------\n' +
    '  ' + board[3] + ' | ' + board[4] + ' | ' + board[5] + '\n' +
    ' -----------\n' +
    '  ' + board[6] + ' | ' + board[7] + ' | ' + board[8] + '\n');
}

function checkWin() {
  if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
    win = 'X';
  } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
    win = 'X';
  } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
    win = 'X';
  } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
    win = 'X'
  } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
    win = 'X'
  } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
    win = 'X'
  } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
    win = 'X'
  } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
    win = 'X'
  } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
    win = 'O';
  } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
    win = 'O';
  } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
    win = 'O';
  } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
    win = 'O'
  } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
    win = 'O'
  } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
    win = 'O'
  } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
    win = 'O'
  } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
    win = 'O'
  } else {
    var count = 0;
    for (var i = 0; i < board.length; i++) {
      if (board[i] !== ' ') {
        count++
      }
    }
    if (count < board.length) {
      win = null
    } else {
      win = 'tie'
    }
  }
  return win;
}

function eachTurn(player, board) {
  printBoard();
  prompt.get(['position'], function (err, result) {
    console.log('  position: ' + result.position);
    board[result.position] = player;
    printBoard();
    checkWin();
    if (win !== null) {
      if (win === 'X' || win === 'O') {
        console.log(`Player ${win} is the winner!`);
      } else {
        console.log(`It's a tie!`);
      }
    } else {
      if (player === 'X') {
        return eachTurn('O', board);
      } else {
        return eachTurn('X', board);
      }
    }
  });
}

return eachTurn('X', board);
