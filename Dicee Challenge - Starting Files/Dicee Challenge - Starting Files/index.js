var randomnumber1 = Math.floor(Math.random()*6) + 1;
var randomdiceimage = "images/dice"+ randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage);
var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomdiceimage2 = "images/dice"+ randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);
if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "player1 wins";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "player2 wins";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}
