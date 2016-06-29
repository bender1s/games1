
//Math formula game

var playerOne = 10;
var playerTwo = 10;
var turn = true;
var arr = [];

// This creates random numbered array- plugs into formula -spits out result
function randomizer () {
for (var i = 0, t = 10; i < 3; i++) {
  arr.push(Math.round(Math.random()* t))
  console.log(arr);
}
function formula(a, b, c) {
  answer =  a * b + c;
}
formula(arr[0], arr[1], arr[2]);
  console.log(answer);
};

// function rounds() {
 if (turn == true) {
var userSolution = prompt(`what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `);
while (userSolution != answer)

{
   var userSolution = prompt(`what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `);
   playerOne -= 1;
 } {
 ("Correct!")
 console.log("playerone Score: " + playerOne);
    randomizer();
  turn = false;
 }
 console.log(arr);
 }



 if (turn == false) {
 var userSolution = prompt(`what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `);
 while (userSolution != answer) {
   var userSolution = prompt(`what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `);
   playerTwo -= 1;
 } {
 ("Correct!")
 console.log("playterTwo Score:" + playerTwo);
    randomizer();
  turn = true;
 }
rounds();

if (playerOne && playerTwo >= 1) {
  rounds();
} else if (playerOne == 0) {
  console.log("Player 2 wins!");
} else {
  console.log("player 1 wins!");
}

// console.log("player points left: " + playerPoints);
