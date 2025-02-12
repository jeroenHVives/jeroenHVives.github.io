const setup = () => {
    window.alert("Dit is een alert");
    let waarde = window.prompt("Hier kun je zelf iets ingeven")
    console.log(waarde)
    waarde = window.prompt("Wat als je op cancel drukt?")
    console.log(waarde)
    waarde = window.confirm("Staat u toe al uw gegevens met ons te delen")
    console.log(waarde)
    waarde= window.confirm("bent u zeker?")
    console.log(waarde)
}
window.addEventListener("load", setup);