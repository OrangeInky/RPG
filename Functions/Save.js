var savegameloop = window.setInterval (function () {
    localStorage.setItem("SAVE", JSON.stringify(GD));
    console.log("SAVED");
}, 10000)

function load() {
    var savegame = JSON.parse(localStorage.getItem("SAVE"))
    if (savegame !== null) {
        GD = savegame
    }
}

function onload() {
    load();
    tab("fight");
}