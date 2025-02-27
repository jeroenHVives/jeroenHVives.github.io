const setup = () => {
    let zin = "De man van An geeft geen hand aan ambetante verwanten"
    zin = zin.toLowerCase();
    indexof(zin);
    lastindexof(zin)
}

let indexof = (zin) => {
    //met indexOf()
    let indexof = 0;
    while (zin.indexOf("an") !== -1) {
        indexof++;
        let index = zin.indexOf("an");
        zin = zin.substring(index+2);
    }
    console.log("an zit " + indexof + " keer in de zin.");
}

let lastindexof = (zin) => {
    //met lastIndexOf()
    let lastindexof = 0;
    while (zin.lastIndexOf("an") !== -1) {
        lastindexof++;
        let index = zin.lastIndexOf("an");
        zin = zin.substring(0, index);
    }
    console.log("an zit " + lastindexof + " keer in de zin.");
}
window.addEventListener("load", setup);