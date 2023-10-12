// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Edit the player name

function editNames() {
    player1 = prompt("Enter the first player's name");
    player2 = prompt("Enter the second player's name");
    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
};

// Rolling the dice

function rollTheDice() {
    setTimeout(function(){
    dice1 = Math.floor((Math.random() * 6) + 1);
    dice2 = Math.floor((Math.random() * 6) + 1);

    document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");

    if (dice1 === dice2) {
        document.querySelector("h1").innerHTML = "Draw";
    } else if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = player1 + " WINS!";
    } else {
        document.querySelector("h1").innerHTML = player2 + " WINS!";
    }
 }, 1000);   
};