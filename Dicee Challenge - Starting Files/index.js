
// dice 1
var randomNumber1 = Math.floor((Math.random()*6)+1);
var diceImage1 = ("images/dice"+randomNumber1+".png");
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",diceImage1);

// Dice2
var randomNumber2 = Math.floor((Math.random()*6)+1);
var diceImage2 = ("images/dice"+randomNumber2+".png");
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",diceImage2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Won !!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Won!! 🚩 ";
}
else {
  document.querySelector("h1").innerHTML="🚩 It's A Draw!!  🚩";
}
