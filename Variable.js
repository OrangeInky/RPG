var GD = {
    Player: {
        EXP: 0,
        MEXP: 20,
        Health: 5,
        Attack: 1,
        Defense: 0,
        LV: 0,
        HP: 5,
    },
    Monster1: {
        LV: 0,
        EXPD: 0,
        Health: 0,
        Attack: 0,
        Defense: 0,
        Name: 0,
        HP: 0,
    }
}

var Loop = window.setInterval (function() {
    document.getElementById('CEXP').innerHTML = GD.Player.EXP;
    document.getElementById('NEXP').innerHTML = GD.Player.MEXP;
    document.getElementById("CLV").innerHTML = GD.Player.LV;
    document.getElementById("HP").innerHTML = GD.Player.Health;
    document.getElementById("ATT").innerHTML = GD.Player.Attack;
    document.getElementById("DEF").innerHTML = GD.Player.Defense;
    document.getElementById("FHP").innerHTML = GD.Player.HP;
},1000)

function SPAWNM() {
    var SPAWNN = Math.floor(Math.random() * 5)
    if (SPAWNN === 0) {
        GD.Monster1.LV = Math.floor(Math.random() * 4 + 1);
        GD.Monster1.Health = GD.Monster1.LV * 2;
        GD.Monster1.HP = GD.Monster1.Health;
        GD.Monster1.Attack = GD.Monster1.LV * 1.5;
        GD.Monster1.Defense = 0;
        GD.Monster1.Name = "Chicken";
        GD.Monster1.EXPD = Math.round(GD.Monster1.LV + (GD.Monster1.Health / 3) * 1.3);
        document.getElementById('MNAME').innerHTML = GD.Monster1.Name;
        document.getElementById('MLV').innerHTML = GD.Monster1.LV;
        document.getElementById('MHP').innerHTML = GD.Monster1.HP + "/" + GD.Monster1r.Health;
        document.getElementById('MATT').innerHTML = GD.Monster1.Attack;
        document.getElementById('MDEF').innerHTML = GD.Monster1.Defense;
        document.getElementById('EXPDROP').innerHTML = GD.Monster1.EXPD;
    }
    if (SPAWNN === 1) {
        GD.Monster1.LV = Math.floor(Math.random() * 4 + 1);
        GD.Monster1.Health = GD.Monster1.LV * 1;
        GD.Monster1.HP = GD.Monster1.Health;
        GD.Monster1.Attack = GD.Monster1.LV * 3;
        GD.Monster1.Defense = 0;
        GD.Monster1.Name = "Bat";
        GD.Monster1.EXPD = Math.round(GD.Monster1.LV + (GD.Monster1.Attack / 3) * 1.3);
        document.getElementById('MNAME').innerHTML = GD.Monster1.Name;
        document.getElementById('MLV').innerHTML = GD.Monster1.LV;
        document.getElementById('MHP').innerHTML = GD.Monster1.HP + "/" + GD.Monster1.Health;
        document.getElementById('MATT').innerHTML = GD.Monster1.Attack;
        document.getElementById('MDEF').innerHTML = GD.Monster1.Defense;
        document.getElementById('EXPDROP').innerHTML = GD.Monster1.EXPD;
    }
    if (SPAWNN > 1) {
    }
}
