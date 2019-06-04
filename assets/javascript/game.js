window.onload = function () {
    // Array to the alphabet
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // Array to hold the words to be guessed
    var words = ["EVANGELION", "ANGELS", "GENESIS", "BERSERKER"];

    // Variables to hold in the data
    var userAnswer;
    var userGuesses = [];
    var lives;
    var counter;

    // Creates Buttons 
    var createButtons = function() {
        var buttonsElem = document.getElementById('buttons');

        for( var i = 0; i < alphabet.length; i++) {
            var btn = document.createElement('button');
            btn.innerHTML = alphabet[i];
            buttonsElem.appendChild(btn);
        }
    }

    var runGame = function () {
        createButtons();

    }

    runGame();
}