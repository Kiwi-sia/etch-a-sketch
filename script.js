//default grid
for (let i = 0; i <= 255; i++) {
	let newBox = document.createElement("div");
	newBox.classList.add("box");
	document.getElementById("container").appendChild(newBox);
}
setRandomColors();
// setMonochromeColors();

//set custom size
let newGrid = document.getElementsByClassName("set-size");
newGrid[0].addEventListener("click", () => {
	getNumberOfBoxes();
});

//clear grid
let newClearGrid = document.getElementsByClassName("clear-gird");
newClearGrid[0].addEventListener("click", () => {
	let oldBoxes = document.getElementsByClassName("box");
	Array.from(oldBoxes).forEach((box) => {
		box.style.backgroundColor = "#bab1ba";
	});
});

//set color to dark grey
let newMonochrome = document.getElementsByClassName("monochrome");
newMonochrome[0].addEventListener("click", () => {
	setMonochromeColors();
});

//set color to rainbow
let newRainbow = document.getElementsByClassName("rainbow-colors");
let boxes = document.getElementsByClassName("box");
newRainbow[0].addEventListener("click", () => {
	setRandomColors();
});

function getNumberOfBoxes() {
	let numberOfBoxes = prompt("How many boxes per row?");
	if (numberOfBoxes > 100 || numberOfBoxes <= 0) {
		alert("Please enter a number between 1 and 100");
		numberOfBoxes = 1;
	} else {
		rebuildGrid(numberOfBoxes);
	}
}

function rebuildGrid(numberOfBoxes) {
	clearGrid();
	let newWidth = 100 / numberOfBoxes;
	for (let i = 0; i <= numberOfBoxes * numberOfBoxes - 1; i++) {
		let newBox = document.createElement("div");
		newBox.classList.add("box");
		newBox.style.width = `${newWidth}%`;
		newBox.style.height = `${newWidth}%`;
		document.getElementById("container").appendChild(newBox);
	}
	setRandomColors();
	// setMonochromeColors();
}

//Clearing the Grid
function clearGrid() {
	let oldBoxes = document.getElementsByClassName("box");
	Array.from(oldBoxes).forEach((box) => {
		box.remove();
	});
}
//Generate random RGB value
function getRandomColor() {
	let rndColor = Math.floor(Math.random() * 255);
	return rndColor;
}

//Use rainbow colors
function setRandomColors() {
	let boxes = document.getElementsByClassName("box");
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].removeEventListener("mouseover", onMouseOverMonochrome);
		boxes[i].addEventListener("mouseover", onMouseOverRainbow);
	}
}

//Use monochrome colors
function setMonochromeColors() {
	let boxes = document.getElementsByClassName("box");
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].removeEventListener("mouseover", onMouseOverRainbow);
		boxes[i].addEventListener("mouseover", onMouseOverMonochrome);
	}
}
function onMouseOverRainbow() {
	this.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
}
function onMouseOverMonochrome() {
	this.style.backgroundColor = "black";
}
