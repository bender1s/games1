

Junk Code  =(



// var arr = [];
// var answer = [];
// var playerOne = 10;
// var playerTwo = 10;
// //var value = [];
// var collectGuess = [];
//   console.log(collectGuess);
//
// document.getElementById('player-tag').addEventListener('click', function(event){
//    start();
// });
//
// document.getElementById("select").addEventListener("keyup", function(event) {
//     event.preventDefault();
//       if (event.keyCode == 13) {
//         //console.log(this.value);
//         collectGuess = parseInt(this.value);
//         this.value = '';
//     }
// });
//
// function refresh () {
//   arr = [];
//   answer = [];
// }
//
// function randomizer(min, max) {
//   for (var i = 0; i < 3; i++) {
//     arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
//   }
// }
//
// function formula(a, b, c) {
//   answer.push(a * b + c);
// }
//
// function clickListenOne () {
//   document.getElementById('user-input').addEventListener('keyup', function (e) {
//     if (event.keyCode == 13) {
//       nextstepOne();
//       }
//     });
// }
//
// function clickListenTwo () {
//   document.getElementById('user-input').addEventListener('keyup', function (e) {
//     if (event.keyCode == 13) {
//       nextstepTwo();
//       }
//     })
// }
//
// var playerChange = document.getElementById('player-tag');
// var formulaChange = document.getElementById('formula');
// var correctAnswer = document.getElementById('output');
// var playerOneScore = document.getElementById('player-one');
// var playerTwoScore = document.getElementById('player-two');
//
// function start() {
//   playerUno();
// }
//
// function playerUno(){
//   console.log("User Guessed: " + collectGuess);
//   collectGuess = document.getElementById('user-input').value;
//   randomizer(0, 10);
//   formula(arr[0], arr[1], arr[2]);
//   console.log("Correct Answer is: " + answer);
//   playerChange.innerText = "Player 1 Turn";
//   formulaChange.innerText = `${arr[0]} x ${arr[1]} + ${arr[2]}`;
//  clickListenOne();
//  return;
// }
//
// function nextstepOne () {
//   if (answer[0] === collectGuess) {
//     console.log("correct");
//     refresh();
//     playerDos();
//     return;
//   } else {
//       console.log("Wrong");
//       playerOne -= 1;
//       console.log("Player 1 score is: " + playerOne );
//       playerOneScore.innerText = playerOne;
//       return;
//     }
// }
//
//
// function playerDos(){
//   console.log("User Guessed: " + collectGuess);
//   collectGuess = document.getElementById('user-input').value;
//   randomizer(0, 10);
//   formula(arr[0], arr[1], arr[2]);
//   console.log("Correct Answer is: " + answer);
//   playerChange.innerText = "Player 2 Turn";
//   formulaChange.innerText = `${arr[0]} x ${arr[1]} + ${arr[2]}`;
//   clickListenTwo();
//   return;
// }
//
// function nextstepTwo () {
//   if (answer[0] === collectGuess) {
//     console.log("correct");
//     refresh();
//     playerUno();
//     return;
//   } else  {
//       console.log("Wrong");
//       playerTwo -= 1;
//       console.log("Player 2 score is: " + playerTwo );
//       playerTwoScore.innerText = playerTwo;
//       return;
//     }
// }
//
// /////////////////////////////////////////////////////////////////////////////
//
// function beginLoops (){
// console.log("Game Starting");
// console.log("Player 1 Turn");
// console.log("The answer is: " + answer);
//
// document.getElementById("select").addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//       collectGuess = parseInt(this.value);
//       this.value = '';
//       console.log(collectGuess);
//       console.log(turn);
//
//
// function pOneFun () {
//     playerChange.innerText = "Player 1 Turn"
//   if (answer[0] === collectGuess) {
//   console.log("Correct Answer!");
//   refresh();
//   turn = false;
//     } else if (answer[0] != collectGuess) {
//        playerOne =  playerOne - 1;
//         playerOneScore.innerText = playerOne;
//         console.log("things");
//         turn = true;
//         console.log(turn);
//         beginLoops();
// }
//
// }
// } else if (turn === false) {                        //Player Two
//   playerChange.innerText = "Player 2 Turn"
//   if (answer[0] === collectGuess) {
//   console.log("Correct Answer!");
//   refresh();
//   turn = true;
//     } else if (answer[0] != collectGuess) {
//              playerTwo = playerTwo - 1;
//             playerOneScore.innerText = playerTwo;
//               console.log("Incorrect");
//               turn = false;
//               console.log(turn);
//               beginLoops();
//               }
// }
// })
// }
