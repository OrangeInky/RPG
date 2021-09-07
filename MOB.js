const Monster= [
    {
        ID: 0,
        LV: 0,
        EXPD: 0,
        Health: 0,
        Attack: 0,
        Defense: 0,
        Name: "",
        HP: 0,
        HPM: 1,
        ATM: 1,
        DFM: 1,
    },
    
]
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
    SPAWNM() {

    }
}

let MOB1 = new MOB({
    ID: 1,
    LV: 3,
    EXPD: 3,
    Health: 3,
    Attack: 1,
    Defense: 0,
    Name: "BAT",
    HP: 3,
    HPM: 0.9,
    ATM: 1.2,
    DFM: 0,
})