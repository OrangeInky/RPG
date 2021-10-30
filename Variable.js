var GD = {
    Player: {
        EXP: 0,
        MEXP: 20,
        TEXP: 0,
        Health: 5,
        Attack: 1,
        Defense: 0,
        LV: 0,
        HP: 5,
        REGENSPEED: 0.1,
        PC: 0,
        PCG: 0,
        MLV: 10,
        SOD: 0,
        Name: "You",
        Gold: 0,
        lifeSteal: 0,   
    },
    STATE: {
        DEFENSE: false,
        REGEN: false,
    },
    MULT: {
        ATTM: 1,
        DEFM: 1,
        HPM: 1,
        GENM: 1,
        GLOBAL: 1,
        PCG: 1,
        EXPM: 1,
        DROPM: 1,
    },
    Option: {
        monsterDif: 2,
    },
    Upgrades: {
        Bat: 0,
        Slime: 0,
    }
}

var array = ["Bat Wing: " + GD.Upgrades.Bat + "<br/>" +"Slime Ball:" +GD.Upgrades.Slime]

function GetArray() {
    array = ["Bat Wing: " + GD.Upgrades.Bat + "<br/>" +"Slime Ball: " + GD.Upgrades.Slime];
}

var Loop = window.setInterval (function() {
    document.getElementById('CEXP').innerHTML = prettify(GD.Player.EXP);
    document.getElementById('NEXP').innerHTML = prettify(GD.Player.MEXP - GD.Player.EXP);
    document.getElementById("CLV").innerHTML = GD.Player.LV;
    document.getElementById("ATT").innerHTML = prettify(GD.Player.Attack);
    document.getElementById("DEF").innerHTML = prettify(GD.Player.Defense);
    document.getElementById("FHP").innerHTML = prettify(GD.Player.HP) + "/" + prettify(GD.Player.Health)
    document.getElementById("NAME").innerHTML = GD.Player.Name;
    document.getElementById("NAME2").innerHTML = GD.Player.Name;
    document.getElementById('Cgold').innerHTML = GD.Player.Gold;
    UpdateStat();
    if (GD.Player.HP > GD.Player.Health) {
        GD.STATE.REGEN = false;
        GD.Player.HP = GD.Player.Health;
    }
    if (GD.Player.LV >= 7 ){
        document.getElementById('PRESTIGE').style.display = "";
    } else {
        document.getElementById('PRESTIGE').style.display = "none";
    }
    if (GD.Player.HP <= 0) {
        GD.STATE.REGEN = true;
    }
    if (GD.Upgrades.Bat > 0) {
        GetArray();
        document.getElementById("UPS").style.display = "";  
        document.getElementById("Item").innerHTML = array;
    }
},100)

function prettify(x) {
    return Number.parseFloat(x).toFixed(2);
}

function format(x) {
    let power = Math.floor(Math.log10(x))
    let matissa = x / Math.pow(10, power)
    if (power < 6) {
        return x;
    } else {
        return matissa.toFixed(2) + "e" + power;
    }
}

var REGENloop = window.setInterval (function() {
    if (GD.STATE.REGEN === true) {
        GD.Player.HP += GD.Player.REGENSPEED;
    }
}, 100)

//eventlisteners
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
    },false)}

function ChangeName() {
    GD.Player.Name = (document.getElementById('NameInput').value);
    if(typeof GD.Player.Name === "string") {
        alert("Successfully changed your name!")
    }
}

function ChangeValue() {
    GD.Option.monsterDif = parseInt(document.getElementById('ValueInput').value,10);
    if (parseInt(document.getElementById('ValueInput').value,10) == 0) {
        GD.Option.monsterDif = 1000000000000000;
    }
    document.getElementById("DisplayMonsterDif").innerHTML = GD.Option.monsterDif;
}
function LVUP() {
    if (GD.Player.EXP >= GD.Player.MEXP) {
        GD.Player.EXP = 0;
        GD.Player.MEXP *= 1.50;
        GD.Player.LV += 1;
        document.getElementById("LOG").innerHTML = "You level up! All stats up!"
        document.getElementById("LOG").style.display = ""
    }
}

function UpdateStat() {
    GetUpgradeEffect();
    GD.Player.Defense = ((GD.Player.LV * GD.MULT.DEFM * GD.MULT.GLOBAL) * 0.3) + 0;
    GD.Player.Health = ((GD.Player.LV * GD.MULT.HPM * GD.MULT.GLOBAL) * 3) + 5;
    GD.Player.Attack = ((GD.Player.LV * GD.MULT.ATTM * GD.MULT.GLOBAL * (upgradeeffect.UP1 + 1)) * 1.2) + 1;
    GD.Player.REGENSPEED = ((GD.Player.LV * GD.MULT.GENM * GD.MULT.GLOBAL) * 0.1) + 0.1;
}