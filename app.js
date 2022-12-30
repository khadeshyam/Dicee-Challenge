let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomDiceImage1 = "images/"+"dice"+randomNumber1+".png";
let randomDiceImage2 = "images/"+"dice"+randomNumber2+".png";

let dice = document.getElementsByClassName("img");

dice[0].src=randomDiceImage1;
dice[1].src=randomDiceImage2;

let winner = "";
let hiddenDiv = document.querySelector(".result");

if(randomNumber1 >  randomNumber2){
   winner="Player 1";
   hiddenDiv.innerHTML = winner +" wins";
}
else if(randomNumber1 <  randomNumber2){
   winner="Player 2";
   hiddenDiv.innerHTML = winner +" wins";
}
else{
    hiddenDiv.innerHTML = "Draw"
}









