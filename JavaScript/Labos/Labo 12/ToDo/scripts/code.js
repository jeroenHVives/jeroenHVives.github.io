const setup = () => {
    const addTask = document.getElementById('addTask');
    addTask.addEventListener('click', createNewCard);

    document.querySelectorAll('.column').forEach((el) => {
        const status = el.dataset.status;
        el.addEventListener('dragover', e => e.preventDefault());
        el.addEventListener('drop', e => handleDrop(e, status));
    })
    loadLocalStorage();
}

const loadLocalStorage = () => {
    let objArrayString = localStorage.getItem("jeroenHVives.github.todo");
    if(objArrayString !== null){
        let objArray = JSON.parse(objArrayString);
        for(let i = 0; i < objArray.length; i++){
            let obj = objArray[i];
            let status = document.getElementById(obj.status);
            createCard(obj, status);
        }
    }
}

const handleDrop = (e, status) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    let objArrayString = localStorage.getItem("jeroenHVives.github.todo");
    if(objArrayString !== null) {
        let objArray = JSON.parse(objArrayString);
        let found = false;
        let i = 0;
        while(!found && i < objArray.length) {
            let obj = objArray[i];
            if(obj.date === id){
                found = true;
                objArray.splice(i, 1);
                obj.status = status;
                objArray.push(obj);
                objArrayString = JSON.stringify(objArray);
                localStorage.setItem("jeroenHVives.github.todo", objArrayString)
            }
            i++;
        }
    }
    const draggedElement = document.getElementById(id);
    const elem = document.getElementById(status)
    elem.appendChild(draggedElement);
}

const createElementWithText = (elem, tekst) => {
    let e = document.createElement(elem);
    let txt = document.createTextNode(tekst);
    e.appendChild(txt);
    return e;
}


const createDragableElementWithClassname = (elem, className) => {
    let e = document.createElement(elem);
    e.draggable = true;
    e.className = className;
    return e;
}

const createLocalStorageObject = (titel, desc) => {
    let todo = localStorage.getItem("jeroenHVives.github.todo");
    let date = new Date(Date.now())
    let txtDate = date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    if(todo === null){
        todo = [];
    }
    else {
        todo = JSON.parse(todo);
    }

    let obj = {titel: titel, desc: desc, date: txtDate, status: "todo"};
    todo.push(obj);
    localStorage.setItem("jeroenHVives.github.todo", JSON.stringify(todo));
    return obj;

}

const createCard = (todo_object, status) => {
    let cardElement = createDragableElementWithClassname("div", "task");
    let titelElement = createElementWithText("h2", todo_object.titel);
    let descriptionElement = createElementWithText("p", todo_object.desc);
    let dateElement = createElementWithText("p", todo_object.date);

    cardElement.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", todo_object.date);
    });
    cardElement.id = todo_object.date;

    cardElement.appendChild(titelElement);
    cardElement.appendChild(descriptionElement);
    cardElement.appendChild(dateElement);
    status.appendChild(cardElement);
}

const createNewCard = () => {
    let txt_titel = document.getElementById("txt_titel");
    let txt_description = document.getElementById("txt_description");
    let todo = document.getElementById("todo");


    let todo_object = createLocalStorageObject(txt_titel.value, txt_description.value)

    createCard(todo_object, todo);
}



window.addEventListener("load", setup);