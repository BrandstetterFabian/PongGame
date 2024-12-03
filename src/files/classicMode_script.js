
    Game();
function Game(){
    //CREATE WINDOW HEIGHT AND WIDTH
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    //CREATE THE PLAYER
    let player = document.createElement("div");

    let playerHeight = 200;
    let playerWidth = 30;

    let playerSpeed = 20;

    player.style.height = playerHeight + "px";
    player.style.width = playerWidth + "px";

    player.style.backgroundColor = "blue";

    player.style.position = "absolute";

    let playerLeft = 20;
    let playerTop = (windowHeight / 2);

    player.style.left = playerLeft + "px";
    player.style.top = playerTop + "px";

    document.body.appendChild(player);

    //CREATE THE OPPENENT
    let opponent = document.createElement("div");

    let opponentHeight = 200;
    let opponentWidth = 30;

    let opponentSpeed = 10;

    opponent.style.height = opponentHeight + "px";
    opponent.style.width = opponentWidth + "px";

    opponent.style.backgroundColor = "blue";

    opponent.style.position = "absolute";

    let opponentLeft = windowWidth - opponentWidth - 20;
    let opponentTop = (windowHeight / 2);

    opponent.style.left = opponentLeft + "px";
    opponent.style.top = opponentTop + "px";

    document.body.appendChild(opponent);

    //CREATE THE BALL
    let ball = document.createElement("div");
    let ballHeight = 20;
    let ballWidth = 20;

    let ballLeftPos = windowWidth / 2;
    let ballTopPos = windowHeight / 2;

    let ballLeftPlus = true;
    let ballTopPlus = false;

    let ballLeftPosChange = 10;
    let ballTopPosChange = 10;

    ball.style.backgroundColor = "black";
    ball.style.height = ballHeight + "px";
    ball.style.width = ballWidth + "px";

    ball.style.position = "absolute";
    ball.style.left = ballLeftPos + "px";
    ball.style.top = ballTopPos + "px";

    document.body.appendChild(ball);

    let inter = setInterval(() => {
      BallMovement();
      PlayerMovement(); 
    }, 20);

    // PLAYER MOVEMENT 
let keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.keyCode] = true;
});
document.addEventListener("keyup", (event) => {
    keys[event.keyCode] = false;
});

function PlayerMovement() {
    if (keys[38] && playerTop > 0) { // Arrow Up
        playerTop -= playerSpeed;
    }
    if (keys[40] && playerTop < windowHeight - playerHeight) { // Arrow Down
        playerTop += playerSpeed;
    }

    player.style.top = playerTop + "px";
}
    //OPPONENT MOVEMENT
    function OpponentMovement(){
        if(ballTopPlus == true && opponentTop < windowHeight - opponentHeight && ballLeftPlus == true){         
                opponentTop += opponentSpeed;          
        }
        else if (ballTopPlus == false && opponentTop > windowHeight - windowHeight && ballLeftPlus == true){          
                opponentTop -= opponentSpeed;    
        }
        opponent.style.top = opponentTop + "px";

        document.body.appendChild(opponent);
    }

//BALL MOVEMENT 
function BallMovement(){
    document.addEventListener("keydown", PlayerMovement);
  //OPPONENT POS CHECKMENT
  if(ballLeftPos >= opponentLeft - opponentWidth && opponentTop <= ballTopPos && ballTopPos < (opponentTop + opponentHeight)){
    ballLeftPlus = false;
  }
   else if(ballLeftPos >= windowWidth){
    GAMEOVER();
  }
  //PLAYER POS CHECKMENT
  if(ballLeftPos <= playerLeft + playerWidth && playerTop <= ballTopPos && ballTopPos < (playerTop + playerHeight)){
    ballLeftPlus = true;
  }
  else if(ballLeftPos <= windowWidth - windowWidth){
    GAMEOVER();
  }
  

  if(ballTopPos >= windowHeight - ballHeight){
    ballTopPlus = false;
  }
  if(ballTopPos <= windowHeight - windowHeight){
    ballTopPlus = true;
  }

  //MOVEMENT to right and bottom
  if(ballLeftPlus == true && ballTopPlus == true){
    ballLeftPos += ballLeftPosChange;
    ballTopPos += ballTopPosChange;
  }
  //MOVEMENT to right and top
  if(ballLeftPlus == true && ballTopPlus == false){
    ballLeftPos += ballLeftPosChange;
    ballTopPos -= ballTopPosChange;
  }
  //MOVEMENT to left and bottom
  if(ballLeftPlus == false && ballTopPlus == true){
    ballLeftPos -= ballLeftPosChange;
    ballTopPos += ballTopPosChange;
  }
  //MOVEMENT to left and top
  if(ballLeftPlus == false && ballTopPlus == false){
    ballLeftPos -= ballLeftPosChange;
    ballTopPos -= ballTopPosChange;
  }
OpponentMovement();
ball.style.left = ballLeftPos + "px";
ball.style.top = ballTopPos + "px";

}
function GAMEOVER(){

  clearInterval(inter);
    document.body.removeChild(ball);
    player.style.backgroundColor = "white";
    opponent.style.backgroundColor = "white";

    let restartButton = document.createElement("button");

    let gameOverScreen = document.createElement("div");
    gameOverScreen.innerHTML = "GAME OVER!";
    
    restartButton.onclick = "Restart()";
    restartButton.innerHTML = "restart";
                                  
    gameOverScreen.style.fontSize = "40px";
    gameOverScreen.style.position = "absolute";
    gameOverScreen.style.left = "40%";
    
    restartButton.style.position = "absoulte";
    restartButton.style.left = "45%";
   
    document.body.appendChild(restartButton);
    document.body.appendChild(gameOverScreen);

    function Restart(){
      location.reload(true);
      console.log("dslköföljksfljk");
    }
}

}

