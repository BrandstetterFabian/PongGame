class Paddle {
    constructor() {
        this.height = 15; 
        this.width = 1;
    }
}
function AddElementToBody(element){
    document.body.appendChild(element);
}
const paddle = new Paddle();

document.documentElement.style.height = "100%";
document.body.style.height = "100%";
document.body.style.margin = "0";
document.body.style.padding = "0";

const paddlePlayer = document.createElement("div");
paddlePlayer.style.height = paddle.height + "%"; 
paddlePlayer.style.width = paddle.width + "%";   
paddlePlayer.style.backgroundColor = "blue";
AddElementToBody(paddlePlayer);

const paddleOpponent = document.createElement("div");
paddleOpponent.style.height = paddle.height + "%"; 
paddleOpponent.style.width = paddle.width + "%";   
paddleOpponent.style.backgroundColor = "blue";
AddElementToBody(paddleOpponent);
