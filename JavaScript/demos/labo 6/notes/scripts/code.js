const setup = () => {
    let p = document.createElement('para');
    console.log(p.nodeName, p.nodeType);
    console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType);
}
window.addEventListener("load", setup);