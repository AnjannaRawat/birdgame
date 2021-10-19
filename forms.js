class Form {

    constructor(){
        this.input = createInput("").attribute("placeholder","Enter Your name")
        this.button = createButton("ENTER")
        this.message = createElement("h1")
        this.titleimage= createImg("TITLE.png")
        
    }

    setPosition(){
        this.input.position(width/2-100,height/2+100)
        this.button.position(width/2-60,height/2+170)
        this.message.position(width/2-300,height/2-100)
        this.titleimage.position(370,-100)
    }
    
    buttonPressed(){
        this.button.mousePressed(()=>{
        this.button.hide()
        this.input.hide()
    var message=`Hello! ${this.input.value()}
    </br> wait for another player to join...`
    this.message.html(message)
    playerCount= playerCount+1
    player.name= this.input.value()
    player.index=playerCount
    player.addPlayer()
    player.updateCount(playerCount);
          }  )
    }
    elementStyling(){
        this.input.class("customInput")
        this.button.class("customButton")
        this.message.class("customMessage")
        this.titleimage.class("gametitle")
    }

    display(){
        this.setPosition()
        this.buttonPressed()
        this.elementStyling()
    }

    
}