class Player{
    constructor(){
        this.name= null
        this.index=null
        this.xposition=0
        this.yposition=0
    }

    addPlayer() {
        var playerIndex = "players/player" + this.index;

        if(this.index===1){
          this.xposition=width/2-100
        
          
        }
        else{
          this.xposition=width/2+100
        }
     database.ref(playerIndex).set({
          name: this.name,
          positionX: this.xposition,
          positionY:this.yposition,
        
    
        });
      }

      getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
        });
      }
    
      updateCount(count) {
        database.ref("/").update({
          playerCount: count
        });
      }

      static GetPlayerInfo(){
        var PlayerInfo = database.ref("players")
        PlayerInfo.on("value", data => {
        allPlayer=data.val()
        });

      }
}