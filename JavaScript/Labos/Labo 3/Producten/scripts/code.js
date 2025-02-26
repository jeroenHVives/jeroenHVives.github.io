const setup = () => {
    let btn_berekenen = document.getElementById("btn_berekenen");
    btn_berekenen.addEventListener("click", bereken)

}

let bereken = () => {
    let aantallen = document.getElementsByClassName("aantal");
    let prijzen = document.getElementsByClassName("prijs");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");
    let totalen = 0;
    for(let i = 0; i < aantallen.length; i++){
        let prijs = prijzen[i].innerHTML;
        let space = prijs.indexOf(" ");
        prijs = prijs.substring(0,space);
        prijs = parseFloat(prijs, 10);
        let aantal = parseFloat(aantallen[i].value, 10);
        let btw = parseInt(btws[i].innerHTML, 10);
        btw = btw/100 + 1;
        let subtot = prijs * aantal * btw;
        totalen += subtot
        subtot = subtot.toFixed(2)
        subtotalen[i].innerHTML = subtot + " EUR";
    }
    totaal.innerHTML = totalen.toFixed(2) + " EUR";
}

window.addEventListener("load", setup);