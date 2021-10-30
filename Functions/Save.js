var savegameloop = window.setInterval (function () {
    localStorage.setItem("SAVE", JSON.stringify(GD));
    console.log("SAVED");
}, 10000)

function load() {
    var savegame = JSON.parse(localStorage.getItem("SAVE"))
    if (savegame !== null) {
        GD = savegame
        if (typeof GD.Player.Attack !== "undefined") GD.Player.Attack = savegame.Player.Attack;
        if (typeof GD.Player.Defense !== "undefined") GD.Player.Defense = savegame.Player.Defense;
        if (typeof GD.Player.EXP !== "undefined") GD.Player.EXP = savegame.Player.EXP;
        if (typeof GD.Player.Gold !== "undefined") GD.Player.Gold = savegame.Player.Gold;
        if (typeof GD.Player.HP !== "undefined") GD.Player.HP = savegame.Player.HP;
        if (typeof GD.Player.Health !== "undefined") GD.Player.Health = savegame.Player.Health;
        if (typeof GD.Player.LV !== "undefined") GD.Player.LV = savegame.Player.LV;
        if (typeof GD.Player.MEXP !== "undefined") GD.Player.MEXP = savegame.Player.MEXP;
        if (typeof GD.Player.MLV !== "undefined") GD.Player.MLV = savegame.Player.MLV;
        if (typeof GD.Player.Name !== "undefined") GD.Player.Name = savegame.Player.Name;
        if (typeof GD.Player.PC !== "undefined") GD.Player.PC = savegame.Player.PC;
        if (typeof GD.Player.PCG !== "undefined") GD.Player.PCG = savegame.Player.PCG;
        if (typeof GD.Player.SOD !== "undefined") GD.Player.SOD = savegame.Player.SOD;
        if (typeof GD.Player.TEXP !== "undefined") GD.Player.TEXP = savegame.Player.TEXP;
        if (typeof GD.Player.lifeSteal !== "undefined") GD.Player.lifeSteal = savegame.Player.lifeSteal;
        if (typeof GD.Option.monsterDif !== "undefined") GD.Option.monsterDif = savegame.Option.monsterDif;
        if (typeof GD.MULT.ATTM !== "undefined") GD.MULT.ATTM = savegame.MULT.ATTM;
        if (typeof GD.MULT.DEFM !== "undefined") GD.MULT.DEFM = savegame.MULT.DEFM;
        if (typeof GD.MULT.DROPM !== "undefined") GD.MULT.DROPM = savegame.MULT.DROPM;
        if (typeof GD.MULT.EXPM !== "undefined") GD.MULT.EXPM = savegame.MULT.EXPM;
        if (typeof GD.MULT.GENM !== "undefined") GD.MULT.GENM = savegame.MULT.GENM;
        if (typeof GD.MULT.GLOBAL !== "undefined") GD.MULT.GLOBAL = savegame.MULT.GLOBAL;
        if (typeof GD.MULT.HPM !== "undefined") GD.MULT.HPM = savegame.MULT.HPM;
        if (typeof GD.MULT.PCG !== "undefined") GD.MULT.PCG = savegame.MULT.PCG;
        if (typeof GD.Upgrades.Bat !== "undefined") GD.Upgrades.Bat = savegame.Upgrades.Bat;
        if (typeof GD.Upgrades.Slime !== "undefined") GD.MULT.Slime = savegame.MULT.Slime;
    }
}

function onload() {
    load();
    tab("fight");
}