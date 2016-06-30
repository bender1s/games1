
// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
//Math formula game
var arr = [];
var answer = [];
var playerOne = 10;
var playerTwo = 10;
//var value = [];
var collectGuess = [];

function refresh () {
  arr = [];
  answer = [];
}

// This creates random numbered array- plugs into formula -spits out result
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
var collectGuess = document.getElementById('user-input').value;

document.getElementById('player-tag').addEventListener('click', function(event){
   start();
});

document.getElementById("select").addEventListener("keyup", function(event) {
    event.preventDefault();
      if (event.keyCode == 13) {
        console.log(this.value);
        collectGuess = this.value;
        this.value = '';
    }
});


function start() {
  playerUno();
}

function playerUno(){
  randomizer(0, 10);
  formula(arr[0], arr[1], arr[2]);
  console.log(answer);
  playerChange.innerText = "Player 1 Turn";
  formulaChange.innerText = `${arr[0]} x ${arr[1]} + ${arr[2]}`;
  clickListen();
  function clickListen () {
    document.getElementById('user-input').addEventListener('keyup', function (e) {
      if (event.keyCode == 13) {
        nextstep();
        }
      });
      function nextstep () {
        parseInt(collectGuess, 10);
        if (answer === collectGuess) {
          console.log("correct");
          refresh();
          playerDos();
            }
            console.log("Wrong");
            playerOne -= 1;
             playerOneScore.innerText = playerOne;

        }
    }
};

function playerDos(){
  randomizer(0, 10);
  formula(arr[0], arr[1], arr[2]);
  console.log(answer);
  playerChange.innerText = "Player 2 Turn";
  formulaChange.innerText = `${arr[0]} x ${arr[1]} + ${arr[2]}`;
  clickListen();
  function clickListen () {
    document.getElementById('user-input').addEventListener('keyup', function (e) {
      if (event.keyCode == 13) {
        nextstep();
        }
      });
      function nextstep () {
        parseInt(collectGuess, 10);
        if (answer === collectGuess) {
          console.log("correct");
          refresh();
          start();
            }
            console.log("Wrong");
            playerDos -= 1;
             playerTwoScore.innerText = playerTwo;

        }
    }
}

// if (playerOne && playerTwo >= 1) {
//
//   } else if (playerOne === 0) {
//    console.log("Player 2 wins!");
//     } else {
//    console.log("player 1 wins!");
//  }
