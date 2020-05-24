window.onload = function () {
    // Array to capture when a key is pressed
    var alphaPressed = [...new Set(myArray)];

    var alphaKeys = {
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z"
    }

    lives = 8;
    // Event Listener to Record Key Pressed And Print To Screen
    document.addEventListener('keydown', function (e) {
        event.preventDefault();

        if (e.keyCode > 64 && e.keyCode < 91) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(alphaKeys[e.keyCode]);
            node.appendChild(textnode);
            document.getElementById("guessedLetters").appendChild(node);
            
            
        } else {
            console.log("Wrong Button");
        }

    });


}