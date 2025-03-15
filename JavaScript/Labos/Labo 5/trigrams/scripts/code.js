const setup = () => {
    const btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", trigrams)
}

const trigrams = () => {
    let txtTekst = document.getElementById("txtTekst");
    const woord = txtTekst.value;
    let lstTrigrams = document.getElementById("lstTrigrams");
    lstTrigrams.innerHTML = "";
    for(let i = 3; i <= woord.length ; i++){
        lstTrigrams.innerHTML += '<li>' + woord.slice(i-3, i) + '</li>'
    }

}
window.addEventListener("load", setup);