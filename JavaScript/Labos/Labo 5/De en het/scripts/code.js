const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    printZinMetHet(zin);
    zin = "de man riep deze";
    printZinMetHet(zin)
}

printZinMetHet = (zin) => {
    while(zin.includes("de")){
        let index = zin.indexOf("de");
        zin = zin.slice(0, index) + "het" + zin.substring(index+2);
    }
    console.log(zin);
}
window.addEventListener("load", setup);