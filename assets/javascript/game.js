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
    // Creates the alphabet buttons
    for (var i = 0; i < alphabet.length; i++) {

      var btn = document.createElement('button');
      btn.className = 'btn btn-outline-light letter';
      btn.innerHTML = alphabet[i];
      btn.setAttribute("id", "alphaLetters");
      buttonsElem.appendChild(btn);

      // addEventListener in order to click on dynamic buttons
      btn.addEventListener("click", function () {
        var buttonClicked = (this.innerHTML);
        this.setAttribute("class", "btn btn-outline-light letter");
        this.onclick = null;
        editScore(buttonClicked);

        this.setAttribute("disabled", "disabled");
      })
    }
  }

  var editScore = function (e) {

    // Holds Button Pressed To Compare It With wordArr
    var guess = e.toUpperCase();

    displayLetter(guess);

    for (var i = 0; i < wordArr.length; i++) {
      if (wordArr[i] === guess) {
        userGuesses.push(guess);
        counter += 1;
      }
    }

    var j = (word.indexOf(guess));

    if (j === -1) {
      lives -= 1;
      showLives()
    } else {
      showLives();
    }
  }

  // Selects the div
  // displayed underscores
  // When Key is pressed compare it to the values of underscore.
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

  var displayLetter = function (e) {

    var ancestor = document.getElementById('guessedLetters'),
      descendents = ancestor.getElementsByTagName('*');
    // gets descendent of ancestor by class name UNDERSCORE.

    for (var i = 0; i < descendents.length; ++i) {

      if (e === descendents[i].getAttribute('value')) {
        descendents[i].innerHTML = e;
      }
    }

  }

  // display play button
  document.getElementById("playAgain").onclick = function () {
    location.reload();
    document.getElementById("playAgain").setAttribute("class", "invisible btn btn-outline-light");
  }

  var livesElem = document.getElementById('gameLives');

  var showLives = function () {

    livesElem.innerHTML = "You have " + lives + " lives";

    var playAgainBtn = document.getElementById("playAgain");

    if (lives < 1) {
      livesElem.innerHTML = "You Lost...";
      playAgainBtn.setAttribute("class", "visible btn btn-outline-light");
    } else if (counter === wordArr.length) {
      livesElem.innerHTML = "You Win!";
      playAgainBtn.setAttribute("class", "visible btn btn-outline-light");
    }
  }

  var runGame = function () {

    var words = ["EVANGELION", "ANGELS", "GENESIS", "BERSERKER", "ASUKA", "NERV", "MECHA", "SHINJI"];

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