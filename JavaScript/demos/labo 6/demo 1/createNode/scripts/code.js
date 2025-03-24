const setup = () => {
    let element = document.createElement("p");
    element.setAttribute("class", "color");
    element.setAttribute("id", "txtPar");
    let tekst = document.createTextNode("Hello World");
    element.appendChild(tekst);
    document.querySelector("#myDIV").appendChild(element);


    console.log(element.getAttribute("class"));
}

window.addEventListener("load", setup);