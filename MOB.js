function RBT(min,max) {
    return min + Math.floor((max - min + 1) * Math.random())
}
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
    }
}

function spawnRandomSlime() {
    document.getElementById("bat").style.display = "";
    document.getElementById("MONSTER").style.display = "";
    document.getElementById("WORD").style.display = "none";
    document.getElementById("LOG").style.display = "none";
    var a = new MOB({
        ID: 1,
        LV: RBT(1,4),
        EXPD: 0,
        Health: RBT(2,4),
        Attack: 1,
        Defense: 0,
        Name: "Slime",
        HP: 0,
        HPM: RBT(10,12)/10,
        ATM: RBT(8,16)/10,
        DFM: 0,
    })
    a.Attack = a.Attack * a.ATM * a.LV;
    a.Defense= a.Defense * a.DFM * a.LV;
    a.Health = a.Health * a.HPM * a.LV;
    a.HP = a.Health;
    a.EXPD = (a.LV * ((a.Health * 0.2) + a.Attack * 0.2) * 2 * GD.MULT.EXPM)
    document.getElementById('MNAME').innerHTML = a.Name;
    document.getElementById('MLV').innerHTML = a.LV;
    document.getElementById('MHP').innerHTML = prettify(a.HP) + "/" + prettify(a.Health);
    document.getElementById('MATT').innerHTML = prettify(a.Attack);
    document.getElementById('MDEF').innerHTML = a.Defense;
    document.getElementById('EXPDROP').innerHTML = prettify(a.EXPD)    
    function BATTLE() {
        document.getElementById("EXPLORE").style.display = "none"
        document.getElementById("def").style.display = ""
        document.getElementById("att").style.display = ""
        document.getElementById("bat").style.display = "none"
    }
    
    function ATTACK() {
        a.HP -= (GD.Player.Attack - a.Defense);
        document.getElementById('MHP').innerHTML = a.HP + "/" + a.Health;
        document.getElementById("LOG").style.display = ""
        document.getElementById("LOG").innerHTML = "You dealed :" + prettify(a.Attack - a.Defense) + " damage, but still not enough to kill the monster!"
        if (a.HP <= 0) {
            GD.Player.EXP += a.EXPD;
            document.getElementById("MONSTER").style.display = "none"
            document.getElementById("att").style.display = "none"
            document.getElementById("def").style.display = "none"
            document.getElementById("bat").style.display = "none"
            document.getElementById("EXPLORE").style.display = ""
            document.getElementById("LOG").innerHTML = "You win! Poggers" + " You also gained: " + prettify(a.EXPD) + "exps!"
            document.getElementById("LOG").style.display = ""
        } else {
            TURN();
        }
    }
    
    function DEFENSE() {
        GD.STATE.DEFENSE = true;
        TURN();
    }
    
    function TURN() {
        if (GD.STATE.DEFENSE === true) {
           GD.Player.HP -= (a.Attack - GD.Player.Defense) / 2;
           document.getElementById("LOG").innerHTML = "The monster dealed " + prettify(a.Attack - GD.Player.Defense) + " Damage!" + ", But you are in defend state! So the actual damage is "  + prettify(a.Attack - a.Defense)/2 + "!"
           document.getElementById("LOG").style.display = ""
           document.getElementById("FHP").innerHTML = prettify(GD.Player.HP) + "/" + prettify(GD.Player.Health);
        } else {
            GD.Player.HP -= (a.Attack - GD.Player.Defense);
            document.getElementById("FHP").innerHTML = prettify(GD.Player.HP) + "/" + prettify(GD.Player.Health);
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

    var B = document.getElementById("att");
    if(B) {
        B.addEventListener("click" ,function() {
            ATTACK()
    }, true);
    }
    var B1 = document.getElementById("def");
    if (B1) {
        B1.addEventListener("click", function() {
            DEFENSE()
        }, false);
    }
    var B2 = document.getElementById("bat");
    if (B2) {
        B2.addEventListener("click", function() {
            BATTLE()
        },false);}
    }