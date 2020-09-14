var canvas;
var gameState=0;
var playerCount;
var form,player,game;
var database,position;
var all_players;
var car1,car2,car3,car4;
var carssss;
function setup(){
    database=firebase.database();

    canvas=createCanvas(displayWidth-20,displayHeight-30);

    game = new Game();
     game.getState();
      game.start();

}

function draw(){
if(playerCount===4){
    game.update(1);
}
if(gameState===1){
clear();
game.play();
}
}