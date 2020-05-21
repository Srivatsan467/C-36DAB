class Game {
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState = data.val()
        });
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("THE CAR DAB GAME STARTED",120,100);
        Player.getPlayerInfo();
        if(allPlayers != undefined){
            var displayPositionY = 130;
            console.log(allPlayers);
            for(var plr in allPlayers){
                if(plr === "player"+player.index){
                    fill(226,18,80);
                }
                else{
                    fill(0,0,0);
                }
                displayPositionY = displayPositionY+20;
                textSize(15);
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPositionY);

            }
        }
        if(keyDown(UP_ARROW)&&player.index!=null){
            player.distance = player.distance+50;
            player.update();
        }
    }   
}