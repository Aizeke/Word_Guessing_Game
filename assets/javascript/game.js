window.onload = function () {
  // Array to the alphabet
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // var to hold the words to be guessed
  var word;

  // Variables to hold in the data
  var userAnswer;
  var userGuesses = [];
  var lives;
  var counter;

  // Creates Buttons 
  var createButtons = function () {
    // Links to the button div
    var buttonsElem = document.getElementById('buttons');
    // Creates the alph buttons
    for (var i = 0; i < alphabet.length; i++) {

      var btn = document.createElement('button');
      btn.className = 'btn btn-outline-light letter';
      btn.innerHTML = alphabet[i];
      buttonsElem.appendChild(btn);
      // Event in order to click the button and activate it
      btn.addEventListener("click", function () {
        var userGuess = (this.innerHTML);
        this.setAttribute("class", "btn btn-outline-light active letter");
        this.setAttribute("disabled", "disabled")
        this.click = null;
        // for loop to count the guesses of the user and add it to the guesses array;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === userGuess) {
            userGuesses[i].innerHTML = userGuess;
            counter++;
          }
        }
      });
    }
  }

  // displayed underscores

  var underScores = function () {
    // Selects the div
    var underScoresElem = document.getElementById('guessedLetters');

    for (var i = 0; i < word.length; i++) {
      var createDiv = document.createElement('div');
      createDiv.setAttribute('id', 'underscore');

      createDiv.innerHTML = '_';
      userGuesses.push(userAnswer);

      underScoresElem.appendChild(createDiv);
    }

  }

  livesElem = document.getElementById('gameLives');

  var showLives = function () {
    livesElem.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      livesElem.innerHTML = "Game Over";
    }

    for (var i = 0; i < userGuesses.length; i++) {
      if (counter === userGuesses.length) {
        lives.innerHTML = "You Win!";
      }
    }
  }

  var runGame = function () {

    var words = ["EVANGELION", "ANGELS", "GENESIS", "BERSERKER"];

    word = words[Math.floor(Math.random() * words.length)];
    
    createButtons();

    lives = 10;
    userGuesses = [ ];
    lives = 10;
    counter = 0;
    underScores();
    showLives();

    console.log(word);
  }

  runGame();
}