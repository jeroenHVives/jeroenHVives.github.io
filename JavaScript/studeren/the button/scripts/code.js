const setup = () => {
    startGame()
}

const startGame = () => {
    let container = document.querySelector(".container");
    let titel = createElementWithText("h1", "THE BUTTON");
    let scores = localStorage.getItem("jeroenHVives.github.scores");
    if(scores === null){
        scores = {
            chance: 0,
            highscore: 0,
        }
        localStorage.setItem("jeroenHVives.github.scores", JSON.stringify(scores))
    }else{
        scores = JSON.parse(scores);

    }
    let highscore = createElementWithText("p", "highscore: " + scores.highscore);
    highscore.id = "highscore";
    let score = createElementWithText("p", "score: " + scores.chance);
    score.id = "score";
    let img = createImage("images/button.png", "button");
    img.addEventListener("click", btn_clicked);

    container.appendChild(titel);
    container.appendChild(highscore);
    container.appendChild(score);
    container.appendChild(img);
}


const btn_clicked = () => {
    random = Math.round(Math.random()*100);
    chance = JSON.parse(localStorage.getItem("jeroenHVives.github.scores")).chance;
    console.log(random)
    if(random < chance){
        gameOver();
    }
    else{
        addPoint();
    }
}

const addPoint = () => {
    let score = document.getElementById("score");
    let prevScore = localStorage.getItem("jeroenHVives.github.scores");
    prevScore = JSON.parse(prevScore);
    prevScore.chance++;
    localStorage.setItem("jeroenHVives.github.scores", JSON.stringify(prevScore));
    score.innerHTML = "score: " + prevScore.chance;
}

const gameOver = () => {
    scores = JSON.parse(localStorage.getItem("jeroenHVives.github.scores"));
    if(scores.chance > scores.highscore){
        let highscore = document.getElementById('highscore');
        highscore.innerHTML = "highscore: " + scores.chance;
        scores.highscore = scores.chance;
    }
    let score = document.getElementById("score");
    score.innerHTML = "score: 0";

    scores.chance = 0;

    localStorage.setItem("jeroenHVives.github.scores", JSON.stringify(scores))
}

const createImage = (src, alt) => {
    let e = document.createElement("img");
    e.src = src;
    e.alt = alt;
    return e;
}

const createElementWithText = (element, tekst) => {
    let e = document.createElement(element);
    let tekstNode = document.createTextNode(tekst);
    e.appendChild(tekstNode);
    return e;
}




window.addEventListener("load", setup);