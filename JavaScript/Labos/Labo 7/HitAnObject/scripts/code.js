let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

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
    target.src = global.IMAGE_PATH_PREFIX + "4" + global.IMAGE_PATH_SUFFIX;
    target.alt = "bomb"
    target.id = "target"
    target.style.width = global.IMAGE_SIZE + "px";

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
    let randomInt = Math.floor(Math.random() * global.IMAGE_COUNT);
    //om het target object aan te maken
    let playField = document.getElementById("playField");
    let imgObject = document.createElement("img");
    imgObject.src = global.IMAGE_PATH_PREFIX + randomInt + global.IMAGE_PATH_SUFFIX;
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
    global.timeoutId = setTimeout(randomObject, global.MOVE_DELAY);
}

const hit = () => {
    let txtHits = document.getElementById("txtHits");
    global.score++;
    txtHits.innerHTML = global.score;
    clearTimeout(global.timeoutId);
    randomObject();
}

const gameOver = () => {
    clearTimeout(global.timeoutId);
    console.log("game over")
    window.alert("Game Over!");
}

const updateSize = () => {
    let speelveld=document.getElementById("playField");
    speelveld.style.width=(window.innerWidth - 100)+"px";
    speelveld.style.height=(window.innerHeight - 100)+"px";
}



window.addEventListener("load", setup);


