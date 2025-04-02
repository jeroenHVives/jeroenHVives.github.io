const setup = () => {
    let setup = {
        evenement: 'Codeer Workshop Javascript',
        datum: new Date('2025-04-15'),
        locatie: 'kortrijk',
        deelnemers: ['John','Maria','Ahmed','Sophie'],
    }

    let nu = new Date()

    let milSecTotEvent = setup.datum - nu;
    let dagenTotEvent = milSecTotEvent/1000/60/60/24;

    console.log("setup")
    console.log('evenement: ' + setup.evenement)
    console.log('datum: ' + setup.datum)
    console.log('locatie: ' + setup.locatie)
    console.log('deelnemers: ' + setup.deelnemers.join(" - "))
    console.log('Aantal dagen tot evenement: ' + Math.ceil(dagenTotEvent));
}
window.addEventListener("load", setup);