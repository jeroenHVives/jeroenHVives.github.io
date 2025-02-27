const setup = () => {
    let button = document.getElementById('btnsubmit');
    button.addEventListener('click', spatiesToevoegen);
}

const spatiesToevoegen = () => {
    let zonder = document.getElementById('txtzonder');
    let tekstmet = maakMetSpaties(zonder.value);

    console.log(tekstmet.trim());
}

const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }
    return result;
}
window.addEventListener("load", setup);