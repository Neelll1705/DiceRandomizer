// for dice 1

var randomNumber = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber + ".png"; 

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0]; // selecting first img tag
image1.setAttribute("src",randomImageSource);

//for dice 2

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1]; // selecting second img tag
image2.setAttribute("src",randomImageSource2);

//results
if (randomNumber > randomNumber2) {
    document.querySelector("h1"). innerHTML = "Player 1 Wins!";
}    
else if (randomNumber2 > randomNumber) {
    document.querySelector("h1"). innerHTML = "Player 2 Wins!"
    }   
else {
    document. querySelector("h1"). innerHTML = "Draw!"
    }