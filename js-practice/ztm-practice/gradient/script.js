var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

function randomizeGradient(){
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
	
}

function generateRandomColor(){
	var R = generateRandomHexNumber();
	var G = generateRandomHexNumber();
	var B = generateRandomHexNumber();

	var color = "#" + R + G + B;
	return color;
}

function generateRandomHexNumber(){
	var max = 255;
	var min = 0;
	var number = Math.floor(Math.random() * (max - min + 1)) + min;

	if(number < 16){
		var hex = "0" + number.toString(16);
	} else{
		var hex = number.toString(16);
	}
	return hex;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomizeGradient);

setGradient();