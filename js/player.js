let player;

function PLayer(classType,health,mana,strength,agility,speed){
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function(){
        //Who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        //player Attack
        playerAttack = function(){
            let calcBaseDamage;
            if(player.mana>0){
                calcBaseDamage= player.strength * player.mana / 1000;

            }else{
                calcBaseDamage= player.strength * player.agility / 1000;

            }

            let offsetDamage = Math.floor(Math.random()*Math.floor(10));
            calcOutputDamage = calcBaseDamage + offsetDamage;

            //Number of hits
            let numberOfHits = Math.floor(Math.random()*Math.floor(player.agility/10)/2) +1;

            let attackValues = [calcOutputDamage,numberOfHits];

            return attackValues;
        }

        //Enemy Attack
        let enemyAttack = function(){
            let calcBaseDamage;
            if(player.mana>0){
                calcBaseDamage= enemy.strength * enemy.mana / 1000;

            }else{
                calcBaseDamage= enemy.strength * enemy.agility / 1000;

            }

            let offsetDamage = Math.floor(Math.random()*Math.floor(10));
            calcOutputDamage = calcBaseDamage + offsetDamage;

            //Number of hits
            let numberOfHits = Math.floor(Math.random()*Math.floor(enemy.agility/10)/2) +1;

            let attackValues = [calcOutputDamage,numberOfHits];
            return attackValues;
        }
        //get player/enemy health
        let getPlayerHealth = document.querySelector(".player-health");
        let getEnemyHealth = document.querySelector(".enemy-health");
        //Initiate attacks
        if(getPlayerSpeed >= getEnemySpeed){
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0]*playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("you hit "+playerAttackValues[0]+"damage"+playerAttackValues[1]+"times");
            if(enemy.health<=0){
                alert("You won! Refresh the browser");
                getPlayerHealth.innerHTML="Health : "+player.health;
                getEnemyHealth.innerHTML= "Health : 0";
            }else {
                getEnemyHealth.innerHTML= "Health : "+enemy.health;
                //enemy attacks
                let enemyAttackValues = enemyAttack(); 
                let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("enemy hit "+enemyAttackValues[0]+"damage"+enemyAttackValues[1]+"times");
                if(player.health<=0){
                    alert("You loose! Refresh the browser");
                    getPlayerHealth.innerHTML="Health : 0";
                    getEnemyHealth.innerHTML= "Health : "+enemy.health;
                }else {
                    getPlayerHealth.innerHTML= "Health : "+player.health;
                }
            }
        }else {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("enemy hit "+enemyAttackValues[0]+" damage "+enemyAttackValues[1]+" times");
            if(player.health<=0){
                alert("You loose! Refresh the browser");
                getPlayerHealth.innerHTML="Health : 0";
                getEnemyHealth.innerHTML= "Health : "+enemy.health;
            }else {
                getPlayerHealth.innerHTML= "Health : "+player.health;
                //enemy attacks
                let playerAttackValues = playerAttack(); 
                let totalDamage = playerAttackValues[0]*playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("player hit "+playerAttackValues[0]+" damage "+playerAttackValues[1]+" times");
                if(enemy.health<=0){
                    getPlayerHealth.innerHTML="Health : "+player.health;
                    getEnemyHealth.innerHTML= "Health : 0";
                    alert("You won! Refresh the browser");
                    //window.location = "../index.html"
                }else {
                    getEnemyHealth.innerHTML= "Health : "+enemy.health;
                }
            }

        }
    } 
    
}