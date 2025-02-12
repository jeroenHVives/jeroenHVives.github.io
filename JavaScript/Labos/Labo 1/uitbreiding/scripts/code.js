let images = "";
const setup = () => {
    let btnVoegToe = document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", urlToevoegen);
}
window.addEventListener("load", setup);

urlToevoegen = () => {
    let txtUrl = document.getElementById("txtUrl");
    let divImages = document.getElementById("divImages");
    images += `<img src=" ${txtUrl.value} " alt="an image">`;
    divImages.innerHTML = images ;
}