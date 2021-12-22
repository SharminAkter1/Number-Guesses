// Game Value
let min = 1;
    max = 10;
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
      minNum = document.querySelector('.min-num');
      maxNum = document.querySelector('.max-num');
      guessInput = document.querySelector('#guess-input');  
      guessBtn = document.querySelector('#guess-btn'); 
      message = document.querySelector('.message'); 

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;  

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);


  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a  number between ${min} and ${max}`,'red');
  }

  // Check if won
  if(guess === winningNum) {
     // Game Over
     gameOver(true, `${winningNum} is correct, YOU WIN!`,);

    
  } else {
    // Worng number
    guessesLeft -= 1;
    
    if(guessesLeft === 0) {
      // Game over - lost
      
      gameOver( false, `Game Over, you lost. The correct number was ${winningNum}`)

    } else {
    // Game Continues - answer worng

    // Change border color
    guessInput.style.borderColor = 'red';

    // Clear Input 
    guessInput.value = '';

    // Tell user it's the worng number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses Left`, 'red');
    }

  }
});

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
 // Disable input
 guessInput.disabled = true;
 // change border color
 guessInput.style.borderColor = color;
 // Set text colo
 message.style.color = color;
 // set Message 
 setMessage(msg);

 // Play Again
 guessBtn.value = 'Play Again';
 guessBtn.className = 'play-again';

}

// Get Random Number
function getRandomNum(min, max) {
   return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg;
}
