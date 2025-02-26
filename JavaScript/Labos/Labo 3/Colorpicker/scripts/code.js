const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", updateColor);
        sliders[i].addEventListener("input", updateColor);
    }
}
window.addEventListener("load", setup);

const updateColor = () => {
    const sldRed = document.getElementById("sldRed");
    const sldGreen = document.getElementById("sldGreen");
    const sldBlue = document.getElementById("sldBlue");
    const lblRed = document.getElementById("lblRed");
    const lblGreen = document.getElementById("lblGreen");
    const lblBlue = document.getElementById("lblBlue");
    const swatch = document.getElementById("swatch");
    lblRed.innerHTML = sldRed.value;
    lblBlue.innerHTML = sldBlue.value;
    lblGreen.innerHTML = sldGreen.value;
    swatch.style.backgroundColor = `rgb(${sldRed.value}, ${sldGreen.value}, ${sldBlue.value})`;
}
