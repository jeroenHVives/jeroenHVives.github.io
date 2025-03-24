const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	let save = document.getElementById("save");
	save.addEventListener("click", saveColor);
};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const saveColor = () => {
	let div = document.createElement("div");
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	div.classList.add("swatch");
	div.style.backgroundColor="rgb("+red+","+green+","+blue+")";

	let btn = document.createElement("button");
	let txt_btn = document.createTextNode("X");
	btn.appendChild(txt_btn);
	btn.classList.add("btn_topRight");
	div.appendChild(btn);
	btn.addEventListener("click",  deleteColor);
	div.addEventListener("click", savedColor);
	document.body.appendChild(div);
};

const deleteColor = (e) => {
	e.stopPropagation();
	e.target.parentNode.remove();
};

const savedColor = (e) => {
	colors = e.target.style.backgroundColor;
	red = colors.slice(colors.indexOf('(')+1, colors.indexOf(','))
	console.log(red)
	colors = colors.slice(colors.indexOf(', ')+2)
	green = colors.slice(0, colors.indexOf(', '))
	console.log(green)
	colors = colors.slice(colors.indexOf(',')+2)
	blue = colors.slice(0, colors.indexOf(')'))
	console.log(blue)
	document.getElementById("sldRed").value=red;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("sldGreen").value=green;
	document.getElementById("lblGreen").innerHTML=green;
	document.getElementById("sldBlue").value=blue;
	document.getElementById("lblBlue").innerHTML=blue;
	document.getElementById("swatch").style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

window.addEventListener("load", initialize);