document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
//Math formula game

var playerOne = 10;
var playerTwo = 10;
var turn = true;
var arr = [];
var answer

// This creates random numbered array- plugs into formula -spits out result
function randomizer () {
var arr = [];
for (var i = 0, t = 10; i < 3; i++) {
  arr.push(Math.round(Math.random()* t))
    console.log(arr);
  }
};
function algebra(a, b, c) {
  var answer =  a * b + c;
  answer.push()
};
algebra(arr[0], arr[1], arr[2]);
  console.log(answer);


//Individual rounds
function rounds() {
if (turn == true) {
   var playerChange = document.getElementById("player").innerHTML;
   playerChange.innerHTML = "Player 1 Turn";
var userSolution = `what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `;
while (userSolution != answer) {
  var userSolution = `what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `;
  playerOne -= 1;
} {
("Correct!")
console.log("playerone Score: " + playerOne);
   randomizer();
 turn = false;
}
};

if (turn == false) {
var userSolution = `what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `;
while (userSolution != answer) {
  var userSolution = `what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `;
  playerTwo -= 1;
} {
("Correct!")
console.log("playterTwo Score:" + playerTwo);
  randomizer();
 turn = true;
}
}};
rounds();

if (playerOne && playerTwo >= 1) {
  rounds();
} else if (playerOne == 0) {
  console.log("Player 2 wins!");
} else {
  console.log("player 1 wins!");
};
});
// console.log("player points left: " + playerPoints);
