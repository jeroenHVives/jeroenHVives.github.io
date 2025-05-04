const global = {
    //array met alle stoelen en of dat ze vrij zijn of niet
    seating: [
        [false, true, false, true, true, true, false, true, false],
        [false, true, false ,false, true, false, true, true, true],
        [true, true, true, true, true, true, false, true, false],
        [true, true, true, false, true, false, false, true, false]
    ],
    //controleert of dat de next knop als laatste is ingedrukt geweest
    clickedNext: false
}

//setup die de grid op het scherm zet, alle mogelijke knoppen verwijderd en de find knop toevoegt
const setup = () => {
    createGrid()
    removeRest()
    createBtnFind()
}

//zoekt achter 3 vrije stoelen bij elkaar vanaf iStart, jStart tot het einde van seating
const findSeats = (iStart, jStart) => {
    //toont de grid op het scherm
    createGrid()
    //is om te kijken of dat er al 3 stoelen naast elkaar zijn gevonden
    let found = false;
    let i = iStart;
    //zolang dat i kleiner is dan de lengte van seating en er geen 3 stoelen naast elkaar gevonden zijn
    while(i < global.seating.length && !found){
        let j = jStart;
        //zolang dat j kleiner is dan de lengte van rij i min 2 (om niet out of bound te gaan bij het controleren van de laatste stoel)
        //en er geen 3 stoel naast elkaar gevonden zijn
        while(j < global.seating[i].length-2 && !found){
            // controleerd of dat de drie opvolgende stoelen vrij zijn
            if(global.seating[i][j] && global.seating[i][j+1] && global.seating[i][j+2]){
                //zorgt ervoor dat de 3 stoelen geselecteerd worden op de html pagina
                // dit door de 2d array om te zetten in een 1d array net zoals op de html pagina
                for(let index = i*9+j+1; index < i*9+j+4; index++){
                    //selecteerd het zoveelste kind van het element met de klasse grid (is de vrije stoel)
                    let img = document.querySelector(".grid :nth-child("+ index + ")");
                    //past de source en alternatief van het kinder element aan
                    img.src = "images/seat_select.png";
                    img.alt = "selected";
                }
                seatsFound(i,j)
                found = true;
            }
            j++
        }
        //j moet alleen maar bij de eerste i array (seating[i]) jStart zijn vanaf dan moet j weer 0 zijn.
        jStart = 0;
        i++;
    }
    //als er geen stoelen zijn gevonden wordt er een foutmelding op het scherm getoond.
    if(found === false){
        txt = document.createElement("p");
        removeRest()
        if(global.clickedNext){
            //foutmelding als er bij alle mogelijke zitplaatsen op next werd geklikt
            txt.innerHTML = "No other seats available";
            global.clickedNext = false;
            //btn find om opnieuw vanaf het begin vrije zitplaatsen te zoeken.
            createBtnFind();
        }
        else{
            //foutmelding als er geen vrije zitplaatsen meer beschikbaar zijn
            txt.innerHTML = "No more seats available";
        }
        document.body.appendChild(txt);
    }
}

//verwijdert alle knoppen en voegt de ok knop en next knop toe.
seatsFound = (i,j) => {
    removeRest();
    createBtnOk(i, j);
    createBtnNext(i,j);
}

//zet de stoelen op bezet en laat het programma opnieuw beginnen.
seatsOk = (i, j) => {
       global.seating[i][j] = false;
       global.seating[i][j+1] = false;
       global.seating[i][j+2] = false;
       setup();
}

//zet de 2d array seating om naar een reeks vrije en bezette stoelen die op de html worden getoond.
createGrid = () => {
    //zoekt het element met de klasse grid.
    const grid = document.querySelector(".grid");
    //zorgt ervoor dat er geen stoelen meer staan in de html.
    grid.innerHTML = "";
    //overloopt elke waarde in de array seating
    for(let i = 0; i < global.seating.length; i++){
        for(let j= 0; j < global.seating[i].length; j++){
            //creëert een img element.
            const seat = document.createElement("img");
            //als de waarde true is dan is de stoel beschikbaar
            if(global.seating[i][j]){
                seat.src = "images/seat_avail.png";
                seat.alt = "available";
            }
            //anders is de stoel niet beschikbaar
            else{
                seat.src = "images/seat_unavail.png";
                seat.alt = "unavailable";
            }
            grid.appendChild(seat);
        }
    }

}

//verwijdert alles in de html behalve het grid.
const removeRest = () => {
    //geeft een lijst met alle input en p elementen.
    const buttons = document.querySelectorAll("input, p");
    //overloopt elk element in de lijst.
    for(let i = 0; i < buttons.length; i++){
        //verwijdert het element.
        buttons[i].remove();
    }
}

//creëert de zoek knop
const createBtnFind = () => {
    //maakt een input element aan.
    const btnFind = document.createElement("input");
    //zet de waardes type en value juist.
    btnFind.type = "button";
    btnFind.value = "Find seats";
    //voegt een actie toe als er op de knop wordt geklikt.
    btnFind.addEventListener("click", () => {findSeats(0, 0)});
    //voegt de knop toe aan de html body
    document.body.appendChild(btnFind);
}

//voegt de next knop toe.
const createBtnNext = (i,j) => {
    //maakt een input element aan.
    const btnNext = document.createElement("input");
    //zet de waardes type en value juist.
    btnNext.type = "button";
    btnNext.value = "next seats";
    //voegt een actie toe als er op de knop wordt geklikt.
    btnNext.addEventListener("click", () => {
        //zet clickedNext op true omdat er op next werd geklikt.
        global.clickedNext = true;
        //roept de functie findSeats aan met als start waarde in de array seating de index van de laatste geselecteerde stoel
        findSeats(i, j+3)
    });
    //voegt de knop toe aan de html body.
    document.body.appendChild(btnNext);
}

//voegt oke knop toe.
const createBtnOk = (i,j) => {
    //maakt een input element aan.
    const btnOk = document.createElement("input");
    //Zet de waardes type en value juist.
    btnOk.type = "button";
    btnOk.value =  "get seats";
    //voeft een actie toe als er op de knop wordt geklikt.
    btnOk.addEventListener("click", () => {
        //zet clickedNeext op false omdat dit de enige andere knop is die er kan worden in gedrukt naast de next knop.
        global.clickedNext = false;
        //roept de functie seatsOk aan met als waarde de index van de eerste geselecteerde stoel.
        seatsOk(i,j);
    });
    //voegt de knop toe aan de html body.
    document.body.appendChild(btnOk);
}
//Zorgt ervoor dat de javascript pas start wanneer de volledige webpagina is ingeladen.
window.addEventListener("load", setup);