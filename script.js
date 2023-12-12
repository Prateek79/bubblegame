var timer;
var score = 0;
var rHit;
var clickedNum;


function makeBubble(){
    var bubbles = "";

    for (i = 0; i < +160; i++) {
      var randomNumber = Math.floor(Math.random() * 10);
      bubbles += `<div class="bubble">${randomNumber}</div>`;
    }

    document.querySelector(".game-board").innerHTML = bubbles;
}
makeBubble();

function Time(){

 timer = 60;//this is the timer jo game me dikh rha hai


 // Timereset function hai jo timer count karta hai but vo interval hai to vo jab tak usko clear mahi karenge tab tak chalta hai to usko clear karne ke liye usko variable me store karaya hai
 var Timereset = setInterval(function(){

    if(timer > 0){//if loop isliye use kar rahe hai taki timer kam ho ssake
        timer--;
        document.querySelector("#time").textContent = timer;
    }else{
        clearInterval(Timereset);
        document.querySelector(".game-board").innerHTML = `
        <div>
        <h1 id="gameover">Game Over</h1></div>`;
        
    }
 }, 1000);




}
Time();


function getnewHit(){
    rHit = Math.floor(Math.random()*10)
    document.querySelector("#newHit").textContent = rHit
}
getnewHit();


function increasScore(){
    document.querySelector("#score").textContent = score
    score += 10;
}
increasScore();


function GameValidation(){
    
    document.querySelector(".game-board")
    .addEventListener("click" , function(val){
        clickedNum = Number(val.target.textContent)
        if(clickedNum === rHit){
            increasScore();
            makeBubble();
            getnewHit();
        }
    });
}
GameValidation();

