var randomNumber1=Math.floor((Math.random()*6)+1);
var randomDiceImage= "images/dice"+ randomNumber1 +".png";
image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2=Math.floor((Math.random()*6)+1);
var randomDiceImage2= "images/dice"+ randomNumber2 +".png";
image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if (randomDiceImage2>randomDiceImage) {
    document.querySelector('h1').innerHTML="Player 2 Wins 🚩";
}
else if (randomDiceImage2<randomDiceImage) {
    document.querySelector('h1').innerHTML="Player 1 Wins 🚩"       
}
else{
    document.querySelector('h1').innerHTML="Match Draw 🏳️ Play again"
}