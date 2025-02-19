const setup = () => {
    let btnWithout = document.getElementById("btnWithout");
    let btnWith = document.getElementById("btnWith");
    btnWithout.addEventListener("click", withoutBullet);
    btnWith.addEventListener("click", withBullet);
}

let withBullet = () => {
    let list = document.getElementById("list");
    list.style.listStyle = "disc";
    list.style.backgroundColor = "white";
}

let withoutBullet = () => {
    let list = document.getElementById("list");
    list.style.listStyle = "none";
    list.style.backgroundColor = "red";
}

window.addEventListener("load", setup);