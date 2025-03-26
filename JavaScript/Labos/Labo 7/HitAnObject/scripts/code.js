let timerId = 0;
let gameStarted = false;


const setup = () => {
    window.addEventListener("resize", updateSize);
    updateSize();

    //start knop aanmaken
    let btnStart = document.createElement("input");
    btnStart.type = "button";
    btnStart.value = "start";

    //tekst aantal hits aanmaken
    let txtAantalHits = document.createElement("span");
    txtAantalHits.innerHTML = " Aantal hits ";

    //apart tekstveld met het aantal hits aanmaken
    let txtHits = document.createElement("span");
    txtHits.id = "txtHits";
    txtHits.innerHTML = "0";

    //target element aanmaken
    let target = document.createElement("img");
    target.src = "images/4.png"
    target.alt = "bomb"
    target.id = "target"

    //elementen toevoegen aan het speelveld
    let playField = document.getElementById("playField");
    playField.appendChild(btnStart);
    playField.appendChild(txtAantalHits);
    playField.appendChild(txtHits);
    playField.appendChild(target);

    btnStart.addEventListener("click", start);
};

const start = (e) => {
    e.target.remove();
    randomObject();
}

const randomObject = () => {
    //om het vorige target object te verwijderen
    document.getElementById("target").remove();
    //om een random getal van 1 tot 5 te krijgen
    let randomInt = Math.floor(Math.random() * 5);
    //om het target object aan te maken
    let playField = document.getElementById("playField");
    let imgObject = document.createElement("img");
    imgObject.src = "images/" + randomInt + ".png";
    imgObject.alt = "voedsel of bom";
    imgObject.id = "target";
    imgObject.style.left = Math.floor(Math.random() * (playField.clientWidth - imgObject.width)) + "px";
    imgObject.style.top = Math.floor(Math.random() * (playField.clientHeight - imgObject.height)) + "px";

    if(randomInt > 0){
        imgObject.addEventListener("click", hit);
    }
    else{
        imgObject.addEventListener("click", gameOver);
    }
    playField.appendChild(imgObject);
    console.log("gelukt")
    timerId = setTimeout(randomObject, 1000);
}

const hit = () => {
    let txtHits = document.getElementById("txtHits");
    txtHits.innerHTML = (parseInt(txtHits.innerHTML, 10) + 1);
    clearTimeout(timerId);
    randomObject();
}

const gameOver = () => {
    clearTimeout(timerId);
    console.log("game over")
    window.alert("Game Over!");
}

const updateSize = () => {
    let speelveld=document.getElementById("playField");
    speelveld.style.width=(window.innerWidth - 100)+"px";
    speelveld.style.height=(window.innerHeight - 100)+"px";
}



window.addEventListener("load", setup);


