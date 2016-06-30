
var arr = [];
var answer = [];
var turn = "p1";
playerOne = 10;
playerTwo = 10;

function randomizer(min, max) {
  for (var i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
}
function formula(a, b, c) {
  answer.push(a * b + c);
}

function start() {
  playerChange.innerText = "Player 1 Turn"
  randomizer(1, 10);
  formula(arr[0], arr[1], arr[2]);
  formulaChange.innerText = `${arr[0]} x ${arr[1]} + ${arr[2]}`;
  turn = "p1";
  beginLoops();
}
function refresh() {
  arr = [];
  answer = [];
}

var playerChange = document.getElementById('player-tag');
var formulaChange = document.getElementById('formula');
var correctAnswer = document.getElementById('output');
var playerOneScore = document.getElementById('player-one');
var playerTwoScore = document.getElementById('player-two');


function beginLoops (){
console.log("Game Starting");
console.log("Player 1 Turn");
console.log("The answer is: " + answer);
document.getElementById("select").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
collectGuess = document.getElementById('user-input').value;

        if (turn === "p1" ) {

} else if (true) {

}
}

})
};

document.getElementById('player-tag').addEventListener('click', function(event){
   start();
});
