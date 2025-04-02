const setup = () => {
    let tekst = '{"voornaam":"Pieter","familienaam":"Pol","geboorteDatum":"2003-10-13T00:00:00.000Z","adres":{"straat":"Nieuwestraat 20","postcode":"8500","gemeente":"kortrijk"},"isIngeschreven":true,"namenVanExen":["Brenda","hannelore","amelie","isabel"],"aantalAutos":1}'
    let student1 = JSON.parse(tekst)
    console.log(student1.voornaam)
    console.log(student1.familienaam)
    console.log(student1.geboorteDatum)
    console.log(student1.adres.straat)
    console.log(student1.adres.postcode)
    console.log(student1.adres.gemeente)
    console.log(student1.isIngeschreven)
    console.log(student1.namenVanExen.join(" - "))
    console.log(student1.aantalAutos)


}
window.addEventListener("load", setup);