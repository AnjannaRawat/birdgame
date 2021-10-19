var form, player, playerCount=0,gameState
var bgImg
var track
var database
var game
var allPlayer;
var bird1_img;
var bird2_img;
var bird1 , bird2
var birds=[]
function preload(){
  bgImg=loadImage("skyimage.jpg")
  track=loadImage("track.jpg")
  bird1_img=loadImage("pink.png")
  bird2_img=loadImage("orange.png")

}
function setup(){
  createCanvas(windowWidth,windowHeight)
  database = firebase.database();
  
  game = new Game ()
  game.start()
  game.getState();
}
function draw(){

background(bgImg)

if (playerCount === 2) {
  game.update(1);
}

if (gameState === 1) {
  game.play();
}
}