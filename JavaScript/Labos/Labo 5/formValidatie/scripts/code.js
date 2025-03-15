const setup = () => {
    let btnValidatie = document.getElementById("btnValidatie");
    btnValidatie.addEventListener("click", validatie)
}

const validatie = () => {
    let txtVnaam = document.getElementById("txtVnaam");
    let value_txtVnaam = txtVnaam.value.trim();
    if( value_txtVnaam.length > 30) {
        let errVnaam = document.getElementById("errVnaam");
        errVnaam.innerHTML = "Max. 30 karakters"
        txtVnaam.classList.add("invalid");
    }
    else{
        let errVnaam = document.getElementById("errVnaam");
        errVnaam.innerHTML = ""
        txtVnaam.classList.remove("invalid");
    }

    let txtFnaam = document.getElementById("txtFnaam");
    let value_txtFnaam = txtFnaam.value.trim()
    if(value_txtFnaam.length === 0) {
        let errFnaam = document.getElementById("errFnaam");
        errFnaam.innerHTML = "verplicht veld"
        txtFnaam.classList.add("invalid");
    }
    else if(value_txtFnaam.length > 50) {
        let errFnaam = document.getElementById("errFnaam");
        errFnaam.innerHTML = "Max. 50 karakters"
        txtFnaam.classList.add("invalid");
    }
    else{
        let errFnaam = document.getElementById("errFnaam");
        errFnaam.innerHTML = ""
        txtFnaam.classList.remove("invalid");
    }

    let txtBirth = document.getElementById("txtBirth");
    let value_txtBirth = txtBirth.value.trim();
    if( value_txtBirth.length === 0) {
        let errBirth = document.getElementById("errBirth");
        errBirth.innerHTML = "verplicht veld"
        txtBirth.classList.add("invalid");
    }
    else if(!validatorBirthdate(value_txtBirth)) {
        let errBirth = document.getElementById("errBirth");
        errBirth.innerHTML = "Formaat is niet jjjj-mm-dd"
        txtBirth.classList.add("invalid");

    }
    else{
        let errBirth = document.getElementById("errBirth");
        errBirth.innerHTML = ""
        txtBirth.classList.remove("invalid");
    }

    let txtmail = document.getElementById("txtMail");
    let value_mail = txtmail.value.trim();
    if(value_mail.length === 0) {
        let errMail = document.getElementById("errMail");
        errMail.innerHTML = "Verplicht veld"
        txtmail.classList.add("invalid");
    }
    else if(!value_mail.includes("@") || value_mail.indexOf("@") === 0 || value_mail.indexOf("@") === value_mail.length-1) {
        let errMail = document.getElementById("errMail");
        errMail.innerHTML = "Geen geldig email adres"
        txtmail.classList.add("invalid");
    }
    else{
        let errMail = document.getElementById("errMail");
        errMail.innerHTML = ""
        txtMail.classList.remove("invalid");
    }

    let txtKinderen = document.getElementById("txtKinderen");
    let value_txtKinderen = txtKinderen.value.trim();
    if(!isGetal(value_txtKinderen) || parseInt(value_txtKinderen) < 0) {
        let errKinderen = document.getElementById("errKinderen");
        errKinderen.innerHTML = "is geen positief getal"
        txtKinderen.classList.add("invalid");
    }
    else if(parseInt(value_txtKinderen) > 99){
        let errKinderen = document.getElementById("errKinderen");
        errKinderen.innerHTML = "is te vruchtbaar"
        txtKinderen.classList.add("invalid");
    }
    else{
        let errKinderen = document.getElementById("errKinderen");
        errKinderen.innerHTML = ""
        txtKinderen.classList.remove("invalid");
    }
}

const validatorBirthdate = (value_txtBirth) => {
    return value_txtBirth.length === 10 && isGetal(value_txtBirth.slice(0,4)) && value_txtBirth.charAt(4) === "-" && isGetal(value_txtBirth.slice(5,7)) && value_txtBirth.charAt(7) === "-" && isGetal(value_txtBirth.slice(8))
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}
window.addEventListener("load", setup);