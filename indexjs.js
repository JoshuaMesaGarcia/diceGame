function randomNumber(){
    var randomN = Math.floor((Math.random() * 6) + 1);
    return randomN;
}

window.onload = function diceeImg(){
   var diceFirstPlayer = randomNumber();
   var diceSecondPlayer = randomNumber();

   document.querySelector(".img1").src="./images/dice" + diceFirstPlayer +".png";
   document.querySelector(".img2").src="./images/dice" + diceSecondPlayer +".png";

   diceWinner(diceFirstPlayer,diceSecondPlayer);
}

function diceWinner(rNumber1, rNumber2){
  if(rNumber1 > rNumber2){
    document.querySelector('h1').textContent="Player 1 Wins!";
  }else if(rNumber2 > rNumber1){
    document.querySelector('h1').textContent="Player 2 Wins!";
  }else{
    document.querySelector('h1').textContent="Draw!";
  }
}
