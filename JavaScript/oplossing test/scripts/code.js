const setup = () => {
    const metOfZonder = document.getElementById('slc_MetofZonder');
    const txt_letter = document.getElementById('txt_letter');
    metOfZonder.addEventListener('input', metOfZonderEi);
    txt_letter.addEventListener('input', aantalKeerAanwezig);

}

const metOfZonderEi = () => {
    let metOfZonder = document.getElementById('slc_MetofZonder');
    let opties = metOfZonder.options;
    let gekozen = metOfZonder.selectedIndex;
    let img  = document.getElementById('img');
    let note = document.getElementById('note');
    if(opties[gekozen].value === "met"){
        note.innerHTML = 'Hierboven, een kip met een ei';
        img.classList.remove('hidden');
        img.classList.add('with-egg')
    }
    else if(opties[gekozen].value === "zonder"){
        note.innerHTML = 'Hierboven, een kip zonder een ei';
        img.classList.remove('hidden');
        img.classList.remove('with-egg');
    }
    else if(opties[gekozen].value === "opt_kies"){
        note.innerHTML = '';
        img.classList.add('hidden');
        img.classList.remove('with-egg');
    }
    aantalKeerAanwezig()
}

const aantalKeerAanwezig = () => {
    let txt_letter = document.getElementById('txt_letter');
    let letter = txt_letter.value;
    if (letter !== ""){
        let note = document.getElementById('note');
        let tekst = note.innerHTML;
        if(tekst.includes('<br>')){
            tekst = tekst.slice(0,tekst.indexOf('<br>'));
        }
        let aantalKeer = 0;
        while(tekst.includes(letter)){
            aantalKeer++;
            tekst = tekst.slice(tekst.indexOf(letter) + 1, tekst.length -1);
        }
        note.innerHTML += '<br> Letter"' + letter + '" komt ' + aantalKeer + ' keer voor in bovenstaande zin.'
    }
}

window.addEventListener("load", setup);