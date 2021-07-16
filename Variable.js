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
        Health: 2,
        Attack: 0.1,
        Defense: 0,
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

}