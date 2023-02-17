let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        switch(classType){
            case "Warrior":
                player = new PLayer(classType,200,0,200,100,50);
                break;
            case "Rogue":
                player = new PLayer(classType,100,0,100,150,200);
                break;
            case "Mage":
                player = new PLayer(classType,80,0,50,200,50);
                break;
            case "Hunter":
                player = new PLayer(classType,200,0,50,200,100);
                break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<div class="player-fight"> <img src="resources/img/avatar-player/'+classType.toLowerCase()+'.jpg" alt="player-image" class="player-img"><div class="player-status"><h3>'+ classType+'</h3><p class="player-health">Health : '+player.health+'</p><p>Mana : '+player.mana+'</p><p>Strength '+player.strength+': </p><p>Agility : '+player.agility+'</p><p>Speed : '+player.speed+'</p></div></div>'

    },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getAction = document.querySelector(".action");
        let getArena = document.querySelector(".arena");


        getHeader.innerHTML = '<p>Find an enemy</p>';
        getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy</a>';
        getArena.style.visibility = "visible";

    },
    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getAction = document.querySelector(".action");
        let getEnemy = document.querySelector(".enemy");

        //create enemy
        let enemy0 = new Enemy("Goblin",100,0,50,100,100);

        let enemy1 = new Enemy("Troll",150,0,150,80,150);

        //generate random number 1 or 0
        let chooseRandomEnemy = Math.floor(Math.random()*Math.floor(2));

        switch(chooseRandomEnemy){
            case 0:
                enemy = enemy0;
                break;
            case 1:
                enemy = enemy1;
                break;
        }

        console.log(enemy.enemyType.toLowerCase());

        getHeader.innerHTML = '<p>Action : choose your move</p>';
        getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = ' <img src="resources/img/avatar-enemies/'+enemy.enemyType.toLowerCase()+'.jpg" alt="player-image" class="enemy-img"><div class="enemy-status"><h3>'+ enemy.enemyType+'</h3><p class="enemy-health">Health : '+enemy.health+'</p><p>Mana : '+enemy.mana+'</p><p>Strength '+enemy.strength+': </p><p>Agility : '+enemy.agility+'</p><p>Speed : '+enemy.speed+'</p></div>';
    }
}