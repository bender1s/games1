
var arr = [];
var answer = [];
var turn = true;        //   Setting Variables here
var playerOne = 10;
var playerTwo = 10;
var collectGuess = [];

function randomizer(min, max) {
  for (var i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
}                                       // Ranodom Array maker that plugs into formula
function formula(a, b, c) {
  answer.push(a * b + c);
}

function refresh() {
  arr = [];                         // Refreshes number array and answer each turn when called
  answer = [];
}

var playerChange = document.getElementById('player-tag');
var formulaChange = document.getElementById('formula');
var correctAnswer = document.getElementById('output');              // Element IDs
var playerOneScore = document.getElementById('player-one');
var playerTwoScore = document.getElementById('player-two');

function start() {
  refresh();
  randomizer(0, 10);                                            // Start of logic
  formula(arr[0], arr[1], arr[2]);
  formulaChange.innerText = `${arr[0]} x ${arr[1]} + ${arr[2]}`;

}
document.getElementById("select").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {                        // Keypress
      collectGuess = parseInt(this.value);
      this.value = '';
      console.log("Correct Answer is: " + answer);
if (turn === true) {
  pOneTurn();                                       // Delineates whos turn it is
} else if (turn === false) {
  pTwoTurn();
}

function pOneTurn() {
  console.log("player 1 turn");

    if (answer[0] === collectGuess) {
        console.log("Correct Answer!");
        turn = false;
        playerChange.innerText = "Player 2 Turn"
        start();
        } else if (answer[0] != collectGuess) {
           playerOne -= 1;
            if (playerOne <= 0) {
              window.location.replace(src="loosingpage.html")
            }
            playerOneScore.innerText = playerOne;
            console.log("things");
            turn = true;
            console.log(turn);
}
}
function pTwoTurn(){
  console.log("player 2 turn");

  if (answer[0] === collectGuess) {
      console.log("Correct Answer!");
      turn = true;
      console.log(turn);
      playerChange.innerText = "Player 1 Turn"
      start();
      } else if (answer[0] != collectGuess) {
         playerTwo -= 1;
          if (playerTwo <= 0) {
            window.location.replace(src="loosingpage.html")
          }
          playerTwoScore.innerText = playerTwo;
          console.log("things");
          turn = false;
          console.log(turn);
        }
}
}
})

document.getElementById('player-tag').addEventListener('click', function(event){
  playerChange.innerText = "Player 1 Turn"
   start();
});
