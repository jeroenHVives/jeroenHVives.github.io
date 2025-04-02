const setup = () => {
    let student1 = {
        voornaam: "Pieter",
        familienaam: "Pol",
        geboorteDatum: new Date("2003-10-13"),
        adres: {
            straat: "Nieuwestraat 20",
            postcode: "8500",
            gemeente: "kortrijk"
        },
        isIngeschreven: true,
        namenVanExen:["Brenda", "hannelore", "amelie", "isabel"],
        aantalAutos: 1
    }

    let tekst = JSON.stringify(student1);
    console.log(tekst);
}
window.addEventListener("load", setup);