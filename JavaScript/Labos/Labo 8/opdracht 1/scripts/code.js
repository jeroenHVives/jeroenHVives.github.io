const setup = () => {
    let nu = new Date()
    let geboorteDag = new Date('2006-10-08')
    console.log(geboorteDag)
    let milSecAlive = nu-geboorteDag;
    console.log(milSecAlive)
    console.log('Je leeft al ' + milSecAlive/1000/60/60/24 + ' dagen')
}
window.addEventListener("load", setup);