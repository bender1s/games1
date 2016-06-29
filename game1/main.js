
// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
//Math formula game
var arr = [];
var answer = [];
var turn = false;
var playerOne = 10;
var playerTwo = 10;

// This creates random numbered array- plugs into formula -spits out result
function randomizer(min, max) {
  for (var i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
}
function formula(a, b, c) {
  answer.push(a * b + c);
}

randomizer(0, 10);
formula(arr[0], arr[1], arr[2]);
console.log(arr);
console.log(answer);

var playerChange = document.getElementById('player-tag');
var formulaChange = document.getElementById('formula');
var correctAnswer = document.getElementById('output');
var playerOneScore = document.getElementsByClassName('player-one');
var playerTwoScore = document.getElementsByClassName('player-two');
var collectGuess = document.getElementById('user-input').value;

// document.getElementById('player-tag').addEventListener('click', function(event){
//   playerChange.innerText = "newtexthere"
// });

// function runScript(e) {
//     if (e.keyCode == 13) {
//         var tb = document.getElementById("userInput");
//         console.log("test");
//         // eval(tb.value);
//         var tb = tb.parse;
//         return false;
//     }
// }

document.getElementById("select")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      //  document.getElementById("select").click();
        console.log(this.value);
        this.value = "";
    }
});


function start() {
  console.log('starting game');
  turn = true;
  playGame();
}
start();
function playGame(){
  if (turn) {
    formulaChange.innerText = "hello"
  }
  playerChange.innerText = "Player 1 Turn"
  formulaChange.innerText = `${arr[0]} x ${arr[1]} + ${arr[2]}`

}

// function userInput() {
//
// }

console.log(collectGuess);


 // if (playerOne && playerTwo >= 1) {
 //
 // } else if (playerOne == 0) {
 //   console.log("Player 2 wins!");
 // } else {
 //   console.log("player 1 wins!");
 // }
 //
