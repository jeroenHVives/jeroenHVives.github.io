const setup = () => {
    let btnSubstring = document.getElementById('btnSubstring');
    btnSubstring.addEventListener('click', toSubstring)
}

const toSubstring = () => {
    let txtGebruiker = document.getElementById('txtGebruiker');
    let gebruiker = txtGebruiker.value;
    let txtStart = document.getElementById('txtStart');
    let start = txtStart.value
    let txtEnd = document.getElementById('txtEnd');
    let end = txtEnd.value
    let substring = document.getElementById('substring');
    substring.innerHTML = gebruiker.substring(start, end);
}

window.addEventListener("load", setup);