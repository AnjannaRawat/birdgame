class Game{
constructor(){

}

getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {

    database.ref("/").update({
      gameState: state
    });
  }


start() {
  player= new Player()  
  playerCount = player.getCount();
  form = new Form()
  form.display()
  bird1 = createSprite (width/2-50,height-100)
  bird1.addImage(bird1_img)
 bird1.scale= 0.5
 bird2 = createSprite(width/2+100,height-100)
 bird2.addImage(bird2_img)
 bird2.scale=0.5

 birds=[bird1,bird2]
}

play(){
    console.log("GAME STARTED")
    Player.GetPlayerInfo();
    if(allPlayer !== undefined){
      image(track,0,-height*5,width,height*6)


      var index=0
      for(var plr in allPlayer){
        index= index+1
        var x=allPlayer[plr].positionX
        var y=height-allPlayer[plr].positionY
        birds[index-1].position.x=x
        birds[index-1].position.y=y
        if(index===player.index){
        camera.position.y=birds[index-1].position.y
        }
      }
    }
}
}