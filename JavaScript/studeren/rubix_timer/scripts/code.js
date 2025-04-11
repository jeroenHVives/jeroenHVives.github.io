let global = {
    TIJD: 0,
    interval_id: null,
}

const setup = () => {
    document.body.addEventListener('click', timer)
}

const timer = () => {
    if(global.TIJD === 0){
        global.interval_id = setInterval(tick, 1);
    }
    else{
        clearInterval(global.interval_id);
        create_buttons();

    }
}

const tick = () => {
    global.TIJD++;
    tijd_kopie = global.TIJD;
    const timer_elem = document.getElementById('timer');
    timer_elem.innerHTML = Math.floor(tijd_kopie/1000/60);
    tijd_kopie -= Math.floor(tijd_kopie/1000/60);
    timer_elem.innerHTML += ":" + Math.floor(tijd_kopie/1000);
    tijd_kopie -= Math.floor(tijd_kopie/1000)*1000;
    timer_elem.innerHTML += ":" + tijd_kopie;
}

const create_buttons = () => {
    let btn_dnf = document.createElement('input')
    btn_dnf.type = 'button';
    btn_dnf.value = 'dnf';
    btn_dnf.addEventListener('click', dnf)

    document.body.appendChild(btn_dnf);

    let btn_2 = document.createElement('input')
    btn_2.type = 'button';
    btn_2.value = '+2';
    btn_2.addEventListener('click', btn2)

    document.body.appendChild(btn_2);

    let btn_oke  = document.createElement('input')
    btn_oke.type = 'button';
    btn_oke.value = 'oke';
    btn_oke.addEventListener('click', oke)

    document.body.appendChild(btn_oke);

    let btn_delete = document.createElement('input');
    btn_delete.type = 'button';
    btn_delete.value = 'delete';
    btn_delete.addEventListener('click', delete_button)

    document.body.appendChild(btn_delete);
}

const delete_button = (e) => {
    e.stopPropagation()
    restart();
}



const restart = () => {
    let buttons = document.querySelectorAll('input');
    for(let i = 0; i < buttons.length; i++) {
        document.body.removeChild(buttons[i]);
    }
    global.TIJD = 0;
    let timer = document.getElementById('timer');
    timer.innerHTML = '00:00:000';
}

const oke = (e) => {
    let tr = document.createElement('tr');
    let td_datum = document.createElement('td');
    td_datum.innerHTML = new Date(Date.now());
    let index = td_datum.innerHTML.indexOf(' GMT')
    td_datum.innerHTML = td_datum.innerHTML.slice(0, index);

    let td_tijd = document.createElement('td');
    let tem_tijd = global.TIJD;
    td_tijd.innerHTML = Math.floor(tem_tijd/1000/60);
    tem_tijd = tem_tijd - Math.floor(tem_tijd/1000/60);
    td_tijd.innerHTML += ':' + Math.floor(tem_tijd/1000);
    tem_tijd = tem_tijd - Math.floor(tem_tijd/1000)*1000;
    td_tijd.innerHTML += ':' + tem_tijd;

    let td_finished = document.createElement('td');
    td_finished.innerHTML = 'finished';

    tr.appendChild(td_datum);
    tr.appendChild(td_tijd);
    tr.appendChild(td_finished);
    let table = document.querySelector('table')
    table.appendChild(tr)
    e.stopPropagation()
    restart();
}


const btn2 = (e) => {
    let tr = document.createElement('tr');
    let td_datum = document.createElement('td');
    td_datum.innerHTML = new Date(Date.now());
    let index = td_datum.innerHTML.indexOf(' GMT')
    td_datum.innerHTML = td_datum.innerHTML.slice(0, index);

    let td_tijd = document.createElement('td');
    let tem_tijd = global.TIJD + 2000;
    td_tijd.innerHTML = Math.floor(tem_tijd/1000/60);
    tem_tijd = tem_tijd - Math.floor(tem_tijd/1000/60);
    td_tijd.innerHTML += ':' + Math.floor(tem_tijd/1000);
    tem_tijd = tem_tijd - Math.floor(tem_tijd/1000)*1000;
    td_tijd.innerHTML += ':' + tem_tijd;


    let td_finished = document.createElement('td');
    td_finished.innerHTML = 'finished';

    tr.appendChild(td_datum);
    tr.appendChild(td_tijd);
    tr.appendChild(td_finished);
    let table = document.querySelector('table')
    table.appendChild(tr)
    e.stopPropagation()
    restart();
}

const dnf = (e) => {
    let tr = document.createElement('tr');
    let td_datum = document.createElement('td');
    td_datum.innerHTML = new Date(Date.now());
    let index = td_datum.innerHTML.indexOf(' GMT')
    td_datum.innerHTML = td_datum.innerHTML.slice(0, index);

    let td_tijd = document.createElement('td');
    td_tijd.innerHTML = document.getElementById('timer').innerHTML;

    let td_finished = document.createElement('td');
    td_finished.innerHTML = 'dnf';

    tr.appendChild(td_datum);
    tr.appendChild(td_tijd);
    tr.appendChild(td_finished);
    let table = document.querySelector('table')
    table.appendChild(tr)
    e.stopPropagation()
    restart();
}
window.addEventListener("load", setup);