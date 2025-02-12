const setup = () => {
    let btnVeranderen = document.getElementById("btnVeranderen");
    window.addEventListener('click', welkom)
}

const welkom = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);