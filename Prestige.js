function prestige () {
    GD.Player.PCG = (GD.Player.LV ** 1.2) + GD.Player.SOD;
    GD.Player.PC += GD.Player.PCG;
    GD.Player.Attack = 1;
    GD.Player.Defense = 0;
    GD.Player.EXP = 0;
    GD.Player.LV = 0;
    GD.Player.Health = 5;
    GD.Player.MEXP = 20;
    GD.Player.REGENSPEED = 0.1;
    GD.MULT.GLOBAL += GD.Player.PC * 0.111;
    GD.Player.MLV += 10;
    GD.Player.SOD = 0;
}