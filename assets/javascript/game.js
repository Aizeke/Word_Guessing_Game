window.onload = function () {
  // Array to the alphabet
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // var to hold the word to be guessed
  var word;
  var wordArr;

  // Variables to hold in the data
  var userAnswer;
  var userGuesses = [];
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

      correctChoice(btn);
    }
  }

  var correctChoice = function (btn) {
    // Event in order to click the button and activate it
    btn.addEventListener("click", function () {
      var buttonClicked = (this.innerHTML);
      this.setAttribute("class", "btn btn-outline-light active letter");
      this.setAttribute("disabled", "disabled");
      this.onclick = null;

      userGuesses.push(buttonClicked);

      // If this text is equal to the same letter 
      // of the word display on screen disable the button.
      // increment the counter;
      var changeVal = document.getElementsByClassName('underscore');

      console.log(changeVal);

      for (var i = 0; i < wordArr.length; i++) {
        if (buttonClicked === wordArr[i]) {
          
          // this.setAttribute("class", "btn btn-outline-light active letter");
          // this.setAttribute("disabled", "disabled");
        }
      }
      //else decriment lives also disable the button;

      console.log("User Answer: " + buttonClicked);

    })
  }

  var underScoresElem = document.getElementById('guessedLetters');
  // displayed underscores
  var underScores = function () {
    // Selects the div
    var createDiv = document.createElement('div');
    //===========================================
    for (var i = 0; i < word.length; i++) {

      createDiv.setAttribute('class', 'underscore');
      createDiv.setAttribute('value', word[i]);

      createDiv.innerHTML = '_';

      underScoresElem.appendChild(createDiv);

      console.log(createDiv);
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