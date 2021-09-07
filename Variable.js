var GD = {
    Player: {
        EXP: 0,
        MEXP: 20,
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
    }
}

var Loop = window.setInterval (function() {
    document.getElementById('CEXP').innerHTML = prettify(GD.Player.EXP);
    document.getElementById('NEXP').innerHTML = prettify(GD.Player.MEXP - GD.Player.EXP);
    document.getElementById("CLV").innerHTML = GD.Player.LV;
    document.getElementById("ATT").innerHTML = prettify(GD.Player.Attack);
    document.getElementById("DEF").innerHTML = prettify(GD.Player.Defense);
    document.getElementById("FHP").innerHTML = prettify(GD.Player.HP) + "/" + prettify(GD.Player.Health);
    if (GD.Player.EXP >= GD.Player.MEXP) {
        GD.Player.EXP = 0;
        GD.Player.MEXP *= 1.4;
        GD.Player.LV += 1;
        GD.Player.Defense = ((GD.Player.LV * GD.MULT.DEFM * GD.MULT.GLOBAL) * 0.3) + 0;
        GD.Player.Health = ((GD.Player.LV * GD.MULT.HPM * GD.MULT.GLOBAL) * 3) + 5;
        GD.Player.Attack = ((GD.Player.LV * GD.MULT.ATTM * GD.MULT.GLOBAL) * 1.2) + 1;
        GD.Player.REGENSPEED = ((GD.Player.LV * GD.MULT.GENM * GD.MULT.GLOBAL) * 0.1) + 0.1;
        document.getElementById("LOG").innerHTML = "You level up! All stats up!"
        document.getElementById("LOG").style.display = ""
    }
    if (GD.Player.HP >= GD.Player.Health) {
        GD.STATE.REGEN = false;
        GD.Player.HP = GD.Player.Health;
    }
    if (GD.Player.LV >= 3) {
        document.getElementById('PRESTIGE').style.display = "";
    } else {
        document.getElementById('PRESTIGE').style.display = "none";
    }
},100)

function SPAWNM() {
    var SPAWNN = Math.floor(Math.random() * 5)
    if (SPAWNN === 0) {
        document.getElementById("MONSTER").style.display = "";
        document.getElementById("WORD").style.display = "none";
        GD.Monster1.LV = Math.floor(Math.random() * 2 + 1);
        GD.Monster1.Health = GD.Monster1.LV * 2;
        GD.Monster1.HP = GD.Monster1.Health;
        GD.Monster1.Attack = GD.Monster1.LV * 1.5;
        GD.Monster1.Defense = 0;
        GD.Monster1.Name = "Chicken";
        GD.Monster1.EXPD = Math.round((GD.Monster1.LV + (GD.Monster1.Health / 3) * 1.3) * (GD.MULT.GLOBAL * 0.3));
        document.getElementById('MNAME').innerHTML = GD.Monster1.Name;
        document.getElementById('MLV').innerHTML = GD.Monster1.LV;
        document.getElementById('MHP').innerHTML = GD.Monster1.HP + "/" + GD.Monster1.Health;
        document.getElementById('MATT').innerHTML = GD.Monster1.Attack;
        document.getElementById('MDEF').innerHTML = GD.Monster1.Defense;
        document.getElementById('EXPDROP').innerHTML = GD.Monster1.EXPD;
    }
    if (SPAWNN === 1) {
        document.getElementById("MONSTER").style.display = "";
        document.getElementById("WORD").style.display = "none";
        GD.Monster1.LV = Math.floor(Math.random() * 2 + 1);
        GD.Monster1.Health = GD.Monster1.LV * 1;
        GD.Monster1.HP = GD.Monster1.Health;
        GD.Monster1.Attack = prettify(GD.Monster1.LV * 2.2);
        GD.Monster1.Defense = 0;
        GD.Monster1.Name = "Bat";
        GD.Monster1.EXPD = Math.round((GD.Monster1.LV + (GD.Monster1.Attack / 3) * 1.3) * (GD.MULT.GLOBAL * 0.3));
        document.getElementById('MNAME').innerHTML = GD.Monster1.Name;
        document.getElementById('MLV').innerHTML = GD.Monster1.LV;
        document.getElementById('MHP').innerHTML = GD.Monster1.HP + "/" + GD.Monster1.Health;
        document.getElementById('MATT').innerHTML = GD.Monster1.Attack;
        document.getElementById('MDEF').innerHTML = GD.Monster1.Defense;
        document.getElementById('EXPDROP').innerHTML = GD.Monster1.EXPD;
    }
    if (SPAWNN > 1) {
        document.getElementById("MONSTER").style.display = "none";
        document.getElementById("WORD").style.display = "";
    }
}

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

