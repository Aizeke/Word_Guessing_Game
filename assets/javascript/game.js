window.onload = function () {
  // Array to the alphabet
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // var to hold the word to be guessed
  var word;
  var wordArr;

  // Variables to hold in the data
  var guessed;
  var userGuesses = [];
  var underscoreArr = [];
  var lives;
  var counter;

  // Creates Buttons 
  // Links to the button div
  var buttonsElem = document.getElementById('buttons');

  var createButtons = function () {
    // Creates the alph buttons
    for (var i = 0; i < alphabet.length; i++) {

      var btn = document.createElement('button');
      btn.className = 'btn btn-outline-light letter';
      btn.innerHTML = alphabet[i];
      buttonsElem.appendChild(btn);

      btn.addEventListener("click", function () {
        var buttonClicked = (this.innerHTML);
        this.setAttribute("class", "btn btn-outline-light active letter");
        this.onclick = null;

        for (var i = 0; i < wordArr.length; i++) {

          if (wordArr[i] === buttonClicked) {
            underscoreArr[i].innerHTML = buttonClicked;
            counter += 1;
          }
        }
        
        console.log(word);
        console.log(buttonClicked);
        
        this.setAttribute("disabled", "disabled");
        userGuesses.push(buttonClicked);
      })
    }
  }

  // Selects the div
  // displayed underscores
  var underScores = function () {
    var underScoresElem = document.getElementById('guessedLetters');
    // Creates dynamic divs for the underscores
    // setting values and class to underscore.
    for (var i = 0; i < wordArr.length; i++) {

      guessed = document.createElement('div');

      guessed.setAttribute('class', 'underscore');
      guessed.setAttribute('value', word[i]);

      guessed.innerHTML = '_';

      underscoreArr.push(guessed);
      underScoresElem.appendChild(guessed);
    }
  }

  var livesElem = document.getElementById('gameLives');

  var showLives = function () {

    livesElem.innerHTML = "You have " + lives + " lives";

    if (lives < 1) {
      livesElem.innerHTML = "You Lost...";
    } else if (counter === wordArr.length) {
      livesElem.innerHTML = "You Win!";
    }
  }

  var runGame = function () {

    var words = ["EVANGELION", "ANGELS", "GENESIS", "BERSERKER"];

    word = words[Math.floor(Math.random() * words.length)];
    wordArr = word.split('');

    createButtons();

    userGuesses = [];
    lives = 10;
    counter = 0;
    underScores();
    showLives();

    console.log(word);
    console.log(wordArr);
  }

  runGame();
}