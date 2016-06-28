
// This creates random numbered array- plugs into formula -spits out result
var arr = [];
for (var i = 0, t = 10; i < 3; i++) {
  arr.push(Math.round(Math.random()* t))
  }
function formula(a, b, c) {
 answer =  a * b + c;
}
formula(arr[0], arr[1], arr[2]);
console.log(arr);
console.log(answer);


// player changer
turnChange = true;
console.log(turnChange);

var userSolution = prompt("what is " + arr[0] + ' * ' + arr[1] + " + " + arr[2] );
console.log(userSolution);
while (userSolution != answer) {
  var userSolution = prompt("what is " + arr[0] + ' * ' + arr[1] + " + " + arr[2] );

}
alert("Correct!")
