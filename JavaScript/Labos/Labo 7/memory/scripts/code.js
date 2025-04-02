let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAl: 3,
    AANTAL_KAARTEN: 6,
    EERSTE_KAART: null,
    TWEEDE_KAART: null,
    TIMEOUT: 2000,
}

const setup = () => {
    const kaarten = ["images/kaart1.png", "images/kaart2.png", "images/kaart3.png", "images/kaart4.png", "images/kaart5.png", "images/kaart6.png", "images/kaart1.png", "images/kaart2.png", "images/kaart3.png", "images/kaart4.png", "images/kaart5.png", "images/kaart6.png"];
    for(let i = 0; i < (global.AANTAL_KAARTEN*2); i++){
            let kaart = document.createElement("div");
            kaart.classList.add("container");

            let achterkant = document.createElement("img");
            achterkant.src = "images/achterkant.png";
            achterkant.alt = "achterkant";
            achterkant.classList.add("top");
            achterkant.classList.add("image")
            achterkant.addEventListener("click", omdraaien);

            let voorkant = document.createElement("img");
            randKaart = Math.round(Math.random() * (kaarten.length-1));
            voorkant.src = kaarten[randKaart];
            kaarten.splice(randKaart, 1);
            voorkant.alt = "kaart";
            voorkant.classList.add("bottom");
            voorkant.classList.add("image");

            kaart.appendChild(voorkant);
            kaart.appendChild(achterkant);

            document.body.appendChild(kaart);
    }

}

const omdraaien = (e) => {
    let parent = e.target.parentElement;
    let front = parent.children[0];
    front.classList.toggle("revealed");
    if(global.EERSTE_KAART === null){
        global.EERSTE_KAART = parent;
    }
    else{
        global.TWEEDE_KAART = parent;
        let cover = document.createElement("div");
        cover.classList.add("cover");
        cover.addEventListener("click", coverClicked);
        document.body.appendChild(cover);
        if(front.src === global.EERSTE_KAART.children[0].src){
            global.EERSTE_KAART.children[0].classList.toggle("correct");
            front.classList.toggle("correct");
            global.EERSTE_KAART = null;
            setTimeout(cardsAreEqual, global.TIMEOUT);
        }
        else{
            global.EERSTE_KAART.children[0].classList.toggle("wrong");
            front.classList.toggle("wrong");
            setTimeout(cardsAreNotEqual, global.TIMEOUT);
        }

    }

}

const cardsAreEqual = () => {
    removeCover()
    //controleren of alle kaarten gevonden zijn

    global.AANTAL_KAARTEN--;
    console.log(global.AANTAL_KAARTEN)
    if(global.AANTAL_KAARTEN === 0){
        let gewonnen = document.createElement("p");
        gewonnen.innerHTML = "Je hebt alle kaarten gevonden"
        gewonnen.classList.toggle("gewonnen");
        gewonnen.classList.toggle("cover");
        document.body.appendChild(gewonnen)
    }
}

const cardsAreNotEqual = () => {
    removeCover()
    global.TWEEDE_KAART.children[0].classList.remove("revealed");
    global.EERSTE_KAART.children[0].classList.remove("revealed");
    global.EERSTE_KAART.children[0].classList.remove("wrong");
    global.TWEEDE_KAART.children[0].classList.remove("wrong");
    global.EERSTE_KAART = null;
    global.TWEEDE_KAART = null;
}

const removeCover = () => {
    let cover = document.querySelector(".cover");
    cover.parentNode.removeChild(cover);
}

const coverClicked = (e) => {
    e.stopPropagation();
}


window.addEventListener("load", setup);