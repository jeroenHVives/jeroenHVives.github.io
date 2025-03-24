const setup = () => {
    let btn = document.querySelector('#btnCreate');
    btn.addEventListener('click', btnClick);
}

btnClick = () => {
    let par = document.createElement("p");
    let txt = document.createTextNode("Hello World");
    par.appendChild(txt);
    let div = document.querySelector("div");
    div.appendChild(par);
}
window.addEventListener("load", setup);