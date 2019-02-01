
// Come up with random number
var randomNum = Math.floor((Math.random() * 10) + 1);

// User needs to make a guess
var takeGuess = () => {
  return prompt("Pick a number between 1 and 10")
};

var guess = takeGuess();

// Check if the number is wrong and tell them it is wrong
while (guess != randomNum) {
  alert("You did not guess the right number, sorry");
  guess = takeGuess();
};

// Make a case if they guess right
alert("You guessed it. The number was " + randomNum);
