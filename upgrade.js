var cost = {
    UP1: [3,10],
    UP2: [3,10],
}
var upgradeeffect = {
    UP1L: 0,
    UP2L: 0,
    UP1: 2/100,
    UP2: 5/100,
}

function GetUpgradeEffect() {
    if (upgradeeffect.UP1L > 0) {
        upgradeeffect.UP1 = 2/100 * UP1L * (GD.MULT.GLOBAL/10 +1)
    } else {
        upgradeeffect.UP1 = 2/100;
    }
}

function BuyUpgrade(id) {
    if (GD.Player.Gold> cost.UP1[1] && GD.Upgrades.Bat> cost.UP1[0]&& id == 1) {
        GD.Player.Gold -= cost.UP1[1];
        GD.Upgrades.Bat -= cost.UP1[0];
        upgradeeffect.UP1L += 1;
        GetUpgradeEffect();
    }
}