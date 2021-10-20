function RBT(min,max) {
    return min + Math.floor((max - min + 1) * Math.random())
}
//The Mob Class
class MOB {
    constructor(Monster) {
        this.ID = Monster.ID;
        this.LV = Monster.LV;
        this.EXPD = Monster.EXPD;
        this.Health = Monster.Health;
        this.Attack = Monster.Attack;
        this.Defense = Monster.Defense;
        this.Name = Monster.Name;
        this.HP = Monster.HP;
        this.HPM = Monster.HPM;
        this.ATM = Monster.ATM;
        this.DFM = Monster.DFM;
        this.GOLDD = Monster.GOLDD;
        this.lifeSteal = Monster.lifeSteal;
    }}


    let a = new MOB({
        ID:0,
        LV:0,
        EXPD:0,
        Health:0,
        Attack:0,
        Defense:0,
        Name: "",
        HP: 0,
        HPM:0,
        ATM:0,
        DFM:0,
    })

    function spawnRandomSlime() {
    a = ({
        ID: 1,LV: RBT(1,4),EXPD: 0,Health: RBT(2,4),Attack: 1, Defense: 0, Name: "Slime",HP: 0,HPM: RBT(10,12)/10,ATM: RBT(8,12)/10,DFM: 0,GOLDD: [0,1,2,3,4,5,6], lifeSteal: 0,
    })}

    function spawnRandomBat() {
    a = ({
        ID: 2,LV: RBT(1,4),EXPD:0,Health: RBT(1,3),Attack: 1, Defense: 0, Name: "Bat",HP: 0, HPM: RBT(6,12)/10,ATM: RBT(10,16)/10,DFM: 0,GOLDD: [0,1,2,3], lifeSteal: 2.2,
    })
    }

//Randomly pick a mob to spawn
    var randomSpawn = 0
    
    function spawnRandomMob() {
        document.getElementById("bat").style.display = "";
        document.getElementById("MONSTER").style.display = "";
        document.getElementById("WORD").style.display = "none";
        document.getElementById("LOG").style.display = "none";
        if (a.lifeSteal > 0) {
            document.getElementById("MLS").innerHTML = prettify(a.lifeSteal) + "%"
        } else {
            document.getElementById("MLS").style.display = "none"
        }


        randomSpawn = Math.floor(Math.random() * 2) + 1;
         if (randomSpawn == 1) {
             spawnRandomSlime();
         }
         if (randomSpawn == 2) {
             spawnRandomBat();
         }
         a.Attack *= a.ATM * a.LV;
         a.Defense *= a.DFM * a.LV;
         a.Health *= a.HPM * a.LV;
         a.HP = a.Health;
         a.EXPD = (a.LV * ((a.Health * 0.2) + a.Attack * 0.2) * 2 * GD.MULT.EXPM)
         document.getElementById('MNAME').innerHTML = a.Name;
         document.getElementById('MLV').innerHTML = a.LV;
         document.getElementById('MHP').innerHTML = prettify(a.HP) + "/" + prettify(a.Health);
         document.getElementById('MATT').innerHTML = prettify(a.Attack);
         document.getElementById('MDEF').innerHTML = a.Defense;
         document.getElementById('EXPDROP').innerHTML = prettify(a.EXPD)
        if (a.LV > GD.Player.LV + GD.Option.monsterDif) {
             spawnRandomMob();
         }}
         
    function BATTLE() {
        document.getElementById("EXPLORE").style.display = "none"
        document.getElementById("def").style.display = ""
        document.getElementById("att").style.display = ""
        document.getElementById("bat").style.display = "none"}
    
    function ATTACK() {
        a.HP -= (GD.Player.Attack - a.Defense);
        document.getElementById('MHP').innerHTML = prettify(a.HP) + "/" + prettify(a.Health);
        document.getElementById("LOG").style.display = ""
        if (a.HP <= 0) {
            GD.Player.EXP += a.EXPD;
            GD.Player.TEXP += a.EXPD
            document.getElementById("MONSTER").style.display = "none"
            document.getElementById("att").style.display = "none"
            document.getElementById("def").style.display = "none"
            document.getElementById("bat").style.display = "none"
            document.getElementById("EXPLORE").style.display = ""
            document.getElementById("tee").innerHTML = GD.Player.TEXP
            document.getElementById("LOG").innerHTML = "You win! Poggers" + " You also gained " + prettify(a.EXPD) + " exps!"
            document.getElementById("LOG").style.display = ""
            if (a.ID == 1) {
                var tempx = (Math.floor(Math.random() * 5) + 1)
                if (tempx == 5) {
                    GD.Upgrades.Slime += 1 * GD.MULT.DROPM;
                    document.getElementById("LOG").innerHTML = "You win! Poggers" + " You also gained " + prettify(a.EXPD) + " exps!" + "<br/>" + "You also gained " + "1" + " slime balls! What can they do though?"
                }
            }
            if (a.ID == 2) {
                var tempx = (Math.floor(Math.random() * 7) + 1)
                if (tempx == 5) {
                    GD.Upgrades.Bat += 1 * GD.MULT.DROPM;
                    document.getElementById("LOG").innerHTML = "You win! Poggers" + " You also gained " + prettify(a.EXPD) + " exps!" + "<br/>" + "You also gained " + "1" + " Bat Teeth ! What can they do though?"
                }
            }
        } else {
            TURN();
        }
    }
    
    function DEFENSE() {
        GD.STATE.DEFENSE = true;
        TURN();
    }
    
    function TURN() {
        if (a.lifeSteal > 0) {
            a.HP += (a.Attack * (a.lifeSteal/10))
        }
        if (GD.STATE.DEFENSE === true) {
           GD.Player.HP -= (a.Attack - GD.Player.Defense) / 2;
           document.getElementById("LOG").innerHTML =  a.Name + " dealed " + prettify(a.Attack - GD.Player.Defense) + " Damage!" + ", But you are in defend state! So the actual damage is "  + prettify(a.Attack - GD.Player.Defense)/2 + "!"
           document.getElementById("LOG").style.display = ""
           document.getElementById("FHP").innerHTML = prettify(GD.Player.HP) + "/" + prettify(GD.Player.Health);
        } else {
            GD.Player.HP -= (a.Attack - GD.Player.Defense);
            document.getElementById("FHP").innerHTML = prettify(GD.Player.HP) + "/" + prettify(GD.Player.Health);
            document.getElementById("LOG").innerHTML = "You dealed " + prettify(GD.Player.Attack - a.Defense) + " damage, but still not enough to kill the monster!" + "<br/>" + a.Name  +" dealed "+ prettify(a.Attack - GD.Player.Defense) + " Damage!"
        }
        GD.STATE.DEFENSE = false;
        if (GD.Player.HP <= 0) {
            document.getElementById("LOG").style.display = "block"
            GD.Player.HP = 0;
            GD.STATE.REGEN = true;
            document.getElementById("MONSTER").style.display = "none"
            document.getElementById("att").style.display = "none"
            document.getElementById("def").style.display = "none"
            document.getElementById("bat").style.display = "none"
            document.getElementById("EXPLORE").style.display = ""
            document.getElementById("LOG").innerHTML = "You lose! Sadge"
        }
        console.log("HP:" + prettify(GD.Player.HP) + " HP Difference: " + prettify(GD.Player.Health - GD.Player.HP) + " Damage Dealed:" + prettify(a.Attack - GD.Player.Defense) + " MOB HEALTH: " + prettify(a.HP) + " MOB LV:" + (a.LV))
}