const setup = () => {
    loadStorage();
    btn_go = document.getElementById("btn_go");
    btn_go.addEventListener("click", create_tabels);
}

const saveStorage = () => {
    let tables = document.querySelectorAll('#tables .table');
    let tafels = [];
    let tafelsJSON;
    for(i = 0; i < tables.length; i++) {
        let getal_tafel = tables[i].dataset.tafel
        tafels.push(getal_tafel);
    }
    tafelsJSON = JSON.stringify(tafels);
    localStorage.setItem("jeroenHVives.github.tafels", tafelsJSON);
}

const loadStorage = () => {
    let tafelsJSON = localStorage.getItem("jeroenHVives.github.tafels");
    if(tafelsJSON !== null){
        let tafels = JSON.parse(tafelsJSON);
        for(let i = 0; i < tafels.length; i++) {
            createTabel(tafels[i]);
        }
    }
}

const create_tabels = () => {
    let old_tabels = document.querySelectorAll('#tables .table')
    verwijderAlleChildren(document.getElementById("tables"));
    for(let i = 0; i < old_tabels.length; i++) {
        let tafel = old_tabels[i].dataset.tafel;
        createTabel(tafel)
    }

    txt_Tafel = document.getElementById("txt_Tafel");
    txt_Tafel_value = txt_Tafel.value;
    if(isGetal(txt_Tafel_value)) {
        createTabel(parseInt(txt_Tafel_value));
    }
    else{
        alert("De ingevoerde waarde moet een getal zijn.")
    }
    txt_Tafel.value = "";

    saveStorage();
}

const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const createTabel = (tafel) => {
        let table = document.createElement("div");
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let tbody = document.createElement("tbody");
        let date = new Date();
        th.innerHTML = "Tafel van " + tafel + " aangemaakt op: " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        for(let i = 1; i <= 10; i++) {
            let tr_body = document.createElement("tr");
            let td_body = document.createElement("td");
            td_body.innerHTML = tafel + ' x ' + i + ' = ' + (parseInt(tafel) * i);
            tr_body.append(td_body);
            tbody.append(tr_body);
        }
        tr.appendChild(th);
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById('tables').appendChild(table);

        table.classList.add("table");
        table.dataset.tafel = tafel;

}


const isGetal = (tekst) => {
    return !isNaN(tekst);
}
window.addEventListener("load", setup);