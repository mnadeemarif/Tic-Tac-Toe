console.log('Welcome to the Tic Tac Toe Game!');

const flip = Math.random();

const turnElement = document.getElementById('turn');
const winnerElement = document.getElementById('winner');
const boardElement = document.getElementById('board');
const resetElement = document.getElementById('reset');
var isGameRunning = true;
resetElement.addEventListener('click', function btnClick(e) {
  location.reload();
});
let turnText = turnElement.innerHTML;
var turn,
  noOfTurns = 0;

const turnF = (player) => {
  return `Turn : ${player} Player`;
};

if (flip < 0.5) {
  turnElement.innerHTML = turnF('O');
  turn = 0;
} else {
  turnElement.innerHTML = turnF('X');
  turn = 1;
}

var map = new Map();
var play = (event) => {
  if (!isGameRunning) return;
  const box = document.getElementById(event.target.id);
  if (map.get(event.target.id) == -1) {
    map.set(event.target.id, turn);
    if (turn == 0) {
      box.firstElementChild.innerHTML = 'O';
      turnElement.innerHTML = turnF('X');
    } else {
      box.firstElementChild.innerHTML = 'X';
      turnElement.innerHTML = turnF('O');
    }
    noOfTurns++;
    checkWinner(turn);
    turn = turn == 0 ? 1 : 0;
  }
};

function checkWinner(player) {
  if (noOfTurns >= 5) {
    let isWinner1stRow =
      map.get('a1') == player &&
      map.get('a2') == player &&
      map.get('a3') == player;
    let isWinner2ndRow =
      map.get('b1') == player &&
      map.get('b2') == player &&
      map.get('b3') == player;
    let isWinner3rdRow =
      map.get('c1') == player &&
      map.get('c2') == player &&
      map.get('c3') == player;
    let isWinner1stCol =
      map.get('a1') == player &&
      map.get('b1') == player &&
      map.get('c1') == player;
    let isWinner2ndCol =
      map.get('a2') == player &&
      map.get('b2') == player &&
      map.get('c2') == player;
    let isWinner3rdCol =
      map.get('a3') == player &&
      map.get('b3') == player &&
      map.get('c3') == player;
    let isWinner1stDiag =
      map.get('a1') == player &&
      map.get('b2') == player &&
      map.get('c3') == player;
    let isWinner2ndDiag =
      map.get('a3') == player &&
      map.get('b2') == player &&
      map.get('c1') == player;

    if (
      isWinner1stRow ||
      isWinner2ndRow ||
      isWinner3rdRow ||
      isWinner1stCol ||
      isWinner2ndCol ||
      isWinner3rdCol ||
      isWinner1stDiag ||
      isWinner2ndDiag
    ) {
      document.getElementById('winner').innerHTML = `${
        player == 0 ? 'O' : 'X'
      } Player Wins`;
      isGameRunning = false;
    }
  }
}
for (let i = 1; i <= 3; i++) {
  let col = '';
  if (i == 1) col = 'a';
  if (i == 2) col = 'b';
  if (i == 3) col = 'c';

  for (let j = 1; j <= 3; j++) {
    let box = col + j;
    map.set(box, -1);
    document.getElementById(box).addEventListener('click', play);
  }
}
