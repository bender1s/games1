
var arr[];
var turn = playerOne
playerOne = 10;
playerTwo = 10;

function start() {
  playerUno();
}

function refresh() {
  arr = [];
  answer [];
}

function randomizer(min, max) {
  for (var i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
}

function formula(a, b, c) {
  answer.push(a * b + c);
}

var playerChange = document.getElementById('player-tag');
var formulaChange = document.getElementById('formula');
var correctAnswer = document.getElementById('output');
var playerOneScore = document.getElementById('player-one');
var playerTwoScore = document.getElementById('player-two');

document.getElementById("select").addEventListener("keyup", function(event) {
    event.preventDefault();
      if (event.keyCode == 13) {
        if (playerOne) {


        }
    }
});
