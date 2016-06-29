var arr = [];
var answer = [];
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
//Math formula game

var playerOne = 10;
var playerTwo = 10;
var turn = true;



// This creates random numbered array- plugs into formula -spits out result
function randomizer(min, max) {
  for (var i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  }
function formula(a, b, c) {
  answer.push(a * b + c);

};
randomizer(0, 10);
formula(arr[0], arr[1], arr[2]);
console.log(arr);
console.log(answer);
//Individual rounds


function rounds() {
if (turn == true) {
  //  var playerChange = document.getElementById("player").innerHTML;
  //  playerChange.innerHTML = "Player 1 Turn";
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
console.log(arr);
}
}


// if (turn == false) {
// var userSolution = `what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `;
// while (userSolution != answer) {
//   var userSolution = `what is: ${arr[0]} * ${arr[1]} + ${arr[2]} `;
//   playerTwo -= 1;
// } {
// ("Correct!")
// console.log("playterTwo Score:" + playerTwo);
//   randomizer();
//  turn = true;
// }
//
// rounds();

if (playerOne && playerTwo >= 1) {
  rounds();
} else if (playerOne == 0) {
  console.log("Player 2 wins!");
} else {
  console.log("player 1 wins!");
}
//}
});
