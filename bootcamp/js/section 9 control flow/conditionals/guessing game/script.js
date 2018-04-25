// set a secret number to start the game
var secretNumber = 11;
// ask user for a guess
var guess = Number(prompt("Please guess a number"));

// check if guess is correct
if(guess === secretNumber){
  alert("You sir are correct!")
}
else if(guess > secretNumber){
  alert(guess + " is too high. Guess again.")
}
else if(guess < secretNumber){
  alert(guess + " is too low. Guess again.")
}
else{
  alert("Please enter a number greater than 0.")
}
