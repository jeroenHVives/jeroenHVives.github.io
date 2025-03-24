const setup = () => {
    let lstPar = document.querySelectorAll("#myDIV > .color")
    for (let i = 0; i < lstPar.length; i++) {
        lstPar[i].addEventListener("click", changeDiv)
    }
}

changeDiv = (e) => {
    e.target.className = "colorParDiv";
}
window.addEventListener("load", setup);