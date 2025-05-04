const setup = () => {
    load();
    const btnGo = document.getElementById('btnGo');
    btnGo.addEventListener('click', enterCommand)
}

const enterCommand = () => {
    const txtCommando = document.getElementById('txtCommando');
    txtCommandoValue = txtCommando.value;
    if(txtCommandoValue.slice(0,1) === "/") {
        const command = isCommand(txtCommandoValue.slice(1,2));
        if(command!== null){
            text = txtCommandoValue.slice(2);
            const url = createLink(command, text)
            const h = {
                title: command,
                text: text,
                url: url
            }
            storeCard(h)
            createCard(command, text, url);
        }
        else{
            alert("Unknown command prefix")
        }
    }
    else{
        alert("Invalid Command");
    }
}

const isCommand = (commandoLetter) => {
    if(commandoLetter === "y") {
        return "Youtube";
    }
    else if(commandoLetter === "g") {
        return "Google";
    }
    else if(commandoLetter === "x") {
        return "Twitter";
    }
    else if(commandoLetter === "i") {
        return "Instagram";
    }
    else{
        return null;
    }

}

const createCard = (title, text, url) => {
    const history = document.querySelector('#history .row');
    const col = createElementWithClassName("div", "col-4 mt-2");
    const card = createElementWithClassName("div", "card bg-" + title.toLowerCase());
    const cardBody = createElementWithClassName("div", "card-body");
    const cardTitle = createElementWithClassNameAndText("div", "card-title", title);
    const cardText = createElementWithClassNameAndText("div", "card-text", text);
    const cardButton = createLinkButton(url);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    card.appendChild(cardBody);
    col.appendChild(card);
    history.appendChild(col);
    cardButton.click();
}

const storeCard = (h) =>{
    let lsStartPage = localStorage.getItem("jeroenHVives.github.startPage");
    let array;
    let arrayJSON;
    if(lsStartPage !== null){
        array = JSON.parse(lsStartPage);
        array.push(h);
        arrayJSON = JSON.stringify(array);
    }
    else{
        array = [h]
        arrayJSON = JSON.stringify(array);
    }
    localStorage.setItem("jeroenHVives.github.startPage", arrayJSON);
}

const load = () =>{
    lsStartPage = localStorage.getItem("jeroenHVives.github.startPage");
    if(lsStartPage !== null){
        lsStartPage = JSON.parse(lsStartPage);
        for(let i = 0; i < lsStartPage.length; i++){
            const title = lsStartPage[i].title;
            const text = lsStartPage[i].text;
            const url = lsStartPage[i].url;
            createCard(title, text, url);
        }
    }
}

const createLink = (site, term) => {
    term = term.trim();
    if(site === "Twitter") {
        return "https://www.x.com/hashtag/" + term;
    }
    else if(site === "Google") {
        return "https://www.google.com/search?q=" + term;
    }
    else if(site === "Youtube") {
        return "https://www.youtube.com/results?search_query=" + term.replace(' ', '+');
    }
    else{
        return "https://www.instagram.com/explore/tags/" + term + "/";
    }
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
}

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
}

window.addEventListener("load", setup);