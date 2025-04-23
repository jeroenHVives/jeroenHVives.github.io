

const storeSliderValues = () => {
    let rgb = {}
    let rgbJSON
    rgb.red = document.getElementById("sldRed").value;
    rgb.green = document.getElementById("sldGreen").value;
    rgb.blue = document.getElementById("sldBlue").value;
    rgbJSON = JSON.stringify(rgb);
    localStorage.setItem("jeroenHVives.github.SliderValues", rgbJSON);

};

const restoreSliderValues = () => {
    if(localStorage.getItem("jeroenHVives.github.SliderValues") !== null){
        let rgbJSON = localStorage.getItem("jeroenHVives.github.SliderValues");
        let rgb = JSON.parse(rgbJSON);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = document.querySelectorAll("#swatchComponents .swatch");
    let arraySwatches = []
    for(let i = 0; i < swatches.length; i++){
        let swatch = {
            red: swatches[i].dataset.red,
            green: swatches[i].dataset.green,
            blue: swatches[i].dataset.blue
        }
        arraySwatches.push(swatch);
    }

    let swatchesJSON = JSON.stringify(arraySwatches);
    localStorage.setItem('jeroenHVives.github.SwatchesValue', swatchesJSON);
};

const restoreSwatches = () => {
    if(localStorage.getItem("jeroenHVives.github.SwatchesValue") !== null){
        let swatchesJSON = localStorage.getItem("jeroenHVives.github.SwatchesValue");
        let swatches = JSON.parse(swatchesJSON);
        for(let i = 0; i < swatches.length; i++){
            let red = swatches[i].red;
            let green = swatches[i].green;
            let blue = swatches[i].blue;
            addSwatchComponent(red, green, blue);
        }

    }
};
