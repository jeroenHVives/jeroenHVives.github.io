const setup = () => {
    let steden = [];
    let stad;
    let index = 0;
    do {
        stad = window.prompt("Gemeente:");
        if(stad != null && stad !== "stop"){
            steden[index] = stad;
            index++;
        }
    } while(stad !== "stop");
    let form = document.getElementById('form');
    form.innerHTML = '<select name="steden" id="select"></select>';
    let select = document.getElementById('select');
    for(gemeente in steden){
        select.innerHTML += '<option value="' + steden[gemeente] + '">' + steden[gemeente] + '</option>';
    }
}
window.addEventListener("load", setup);