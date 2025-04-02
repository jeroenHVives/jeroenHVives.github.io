let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    let elements = document.getElementsByClassName("invalid");
    if(elements.length === 0) {
        let persoon = {};
        if (lstPersonen.selectedIndex === -1){
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon);
            voegPersoonToeAanLijstInUserInterface(persoon);
        }
        else{
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);

        }


        // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten

    }
};

const updatePersoonInLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let options = lstPersonen.options;
    let index = lstPersonen.selectedIndex;
    let persoon1 = options[index];
    persoon1.innerHTML = persoon.voornaam + " " + persoon.familienaam;
}

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.value = persoon.email;
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
    option.addEventListener("click", ophalenBewaardPersoon)
    lstPersonen.appendChild(option);
}

const vulPersoonOpBasisVanUserInterface = (persoon) => {
        persoon.voornaam= document.getElementById("txtVoornaam").value
        persoon.familienaam= document.getElementById("txtFamilienaam").value
        persoon.geboorteDatum= document.getElementById("txtGeboorteDatum").value
        persoon.email= document.getElementById("txtEmail").value
        persoon.aantalKinderen= document.getElementById("txtAantalKinderen").value
}

const ophalenBewaardPersoon = () => {
    console.log("Klik op een optie");
    let lstPersonen = document.getElementById("lstPersonen");
    let index = lstPersonen.selectedIndex;
    let persoon = personen[index];
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtVoornaam.value=persoon.voornaam;
    txtFamilienaam.value=persoon.familienaam;
    txtGeboorteDatum.value=persoon.geboorteDatum;
    txtEmail.value=persoon.email;
    txtAantalKinderen.value=persoon.aantalKinderen;
}
// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    // let txtVoornaam = document.getElementById("txtVoornaam");
    // let txtFamilienaam = document.getElementById("txtFamilienaam");
    // let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    // let txtEmail = document.getElementById("txtEmail");
    // let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    // txtVoornaam.value="";
    // txtFamilienaam.value="";
    // txtGeboorteDatum.value="";
    // txtEmail.value="";
    // txtAantalKinderen.value="";
    //geselecteerde persoon niet meer selecteren
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;
    //Values verwijderen
    let inputElem = document.querySelectorAll('input[type=text]');
    inputElem.forEach((elem) => {
        elem.value="";
    });
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier

};

window.addEventListener("load", setup);