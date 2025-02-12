const setup = () => {
    let familie = ["familielid 1", "familielid 2", "familielid 3", "familielid 4", "familielid 5"];
    console.log(familie.length);
    for(let i = 0; i < familie.length; i=i+2){
        console.log(familie[i]);
    }
    VoegNaamToe(familie);
    console.log(familie);
    console.log(familie.toString())

}
VoegNaamToe = (arr) => {
    const extraLid = prompt("Geef een extra familie lid op:")
    arr.push(extraLid);
}
window.addEventListener("load", setup);