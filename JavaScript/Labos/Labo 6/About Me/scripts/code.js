const setup = () => {
    let listItems = document.querySelectorAll('li');
    for(let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add('listitem')
    }
    let imgElement = document.createElement('img');
    imgElement.src = "images/25-03-08.jpg"
    imgElement.alt = "foto van ik en ilona"
    imgElement.classList.add('size25')
    document.body.appendChild(imgElement);
}
window.addEventListener("load", setup);