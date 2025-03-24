const setup = () => {
    let btnYes = document.getElementById('yes');
    let btnNo = document.getElementById('no');
    btnYes.addEventListener('click', yes)
    btnNo.addEventListener('mouseover', no)
}

const yes = () => {
    let txtZin = document.getElementById('zin');
    let input = window.prompt("What's your name?");
    if(input.toLowerCase() === "ilona") {
        txtZin.innerHTML = "Love you too " + input;
    }
    else{
        txtZin.innerHTML = "thanks " + input;
    }
}

const no = () => {
    let btnNo = document.getElementById('no');
    btnNo.style.top = (getRndInteger(1, 95)) + "%";
    btnNo.style.left = (getRndInteger(1, 90)) + "%";
    let btnYes = document.getElementById('yes');
    btnYes.style.width = btnYes.offsetWidth + 10 + "px";
    btnYes.style.height = btnYes.offsetHeight + 10 + "px";
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

window.addEventListener("load", setup);