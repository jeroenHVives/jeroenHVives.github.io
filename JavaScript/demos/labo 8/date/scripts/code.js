const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);
    console.log(start.getDay())
    console.log(start.getMonth() +1)
    console.log(start.getFullYear())

    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());
    let nu = new Date()

    console.log("toString " + nu.toString())
    console.log(nu.toISOString())

    console.log(nu.toTimeString())

    let geboorteDag = new Date('2006-10-08')
    console.log(geboorteDag)
    milSecAlive = nu-geboorteDag;
    console.log(milSecAlive)
    console.log('Je leeft al ' + milSecAlive/1000/60/60/24 + ' dagen')
}
window.addEventListener("load", setup);