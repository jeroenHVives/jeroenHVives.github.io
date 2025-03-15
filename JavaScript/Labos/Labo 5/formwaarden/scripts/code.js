const setup = () => {
    let btn_resultaat = document.getElementById("btn_resultaat");
    btn_resultaat.addEventListener("click", resultaat)
}

let resultaat = () => {
    let roker = document.getElementById("roker");
    if(roker.checked){
        console.log("is een roker");
    }
    else{
        console.log("is geen roker");
    }

    let moedertaal = document.getElementsByName("moedertaal");
    if(moedertaal[0].checked){
        console.log("moedertaal is nl");
    }
    else if(moedertaal[1].checked){
        console.log("moedertaal is fr");
    }
    else{
        console.log("moedertaal is en");
    }

    let buurland = document.getElementById("buurland");
    let buurland_opt = buurland.options;
    let buurland_fav = buurland.selectedIndex;
    console.log("Favoriete buurland is " + buurland_opt[buurland_fav].value)

    let bestelling = document.getElementById("bestelling");
    let bestelling_opt = bestelling.options;
    let selected = []
    let index;
    let Stringbestelling = "bestelling bestaat uit "
    for(opt in bestelling_opt){
        if(bestelling_opt[opt].selected){
            Stringbestelling += bestelling_opt[opt].value + " ";
        }
    }
    console.log(Stringbestelling.trim())
}
window.addEventListener("load", setup);