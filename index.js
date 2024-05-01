// Initializes the nr of rows and columns
let nrOfRows;
let nrOfColumns;
let nrOfSquares;
// Initializes the main div as an variable
let mainContainer = document.querySelector("#main");

// Creates a function that gets the Grid Size and updates the sketchpad
function genGridSize() {
  // Loops to remove the squares inside a node list
  let squares = mainContainer.querySelectorAll("div");
  for (let square of squares) {
    mainContainer.removeChild(square);
  }

  // Prompts the nr of rows and nr of columns and checks if they are the correct data type and quantaty[Number - in my case]
  do {
    nrOfRows = prompt("Input how many rows you want: ");
  } while (nrOfRows < 1 || nrOfRows > 50 || isNaN(nrOfRows));

  do {
    nrOfColumns = prompt("Input how many columns you want: ");
  } while (nrOfColumns < 1 || nrOfColumns > 50 || isNaN(nrOfColumns));
  // Calculates the neccesary nr of squares
  nrOfSquares = nrOfRows * nrOfColumns;

  // Adds the grid-template to match the nr of rows and nr of columns
  mainContainer.style = `grid-template: repeat(${nrOfRows}, 1fr) / repeat(${nrOfColumns}, 1fr);`;

  // Creates squares and appends them to the grid
  for (let i = 0; i < nrOfSquares; i++) {
    let square = document.createElement("div");
    mainContainer.appendChild(square);
    square.classList.add("square");
  }

// IMPLEMENTING PAINTING FEAUTURES


let colorClass = "grey";
// added Event Listener To Erase Button for Double Click
document.querySelector(".erase").addEventListener("dblclick", clearCanvas)

function clearCanvas()
{

	console.log("Double KIlll!")
	for (let y of mainContainer.querySelectorAll(".square"))
	{
		y.classList.remove("grey", "red", "blue", "pink","purple","yellow","green","erase");
	}

}
for(let x = 0; x < document.querySelectorAll(".colors").length; x++)
{
	document.querySelectorAll("#clrContainer .colors")[x].addEventListener("click", function() 
	{	colorClass = this.classList[1];
		console.log(colorClass);
	})
}
 
let mouseIsDown = false;
mainContainer.addEventListener("mousedown", function() {mouseIsDown = true; console.log("Mouse is down!")})
mainContainer.addEventListener("mouseup", function() {mouseIsDown = false; console.log("Mouse is up!")})

for (let temp = 0; temp < mainContainer.querySelectorAll(".square").length; temp++)
{
	mainContainer.querySelectorAll(".square")[temp].addEventListener("click", fillOnClick);
	mainContainer.querySelectorAll(".square")[temp].addEventListener("mousemove", fillWhileMoving);
}

function fillOnClick()
{
	this.classList.remove("grey", "red", "blue", "pink","purple","yellow","green","erase");
	this.classList.add(colorClass);
}
function fillWhileMoving()
{
	if (mouseIsDown)
	{
		this.classList.remove("grey", "red", "blue", "pink","purple","yellow","green","erase");
		event.target.classList.add(colorClass);
	}
}
}
// Resets the grid to a preset style
function remGrid() {

  // Loops to remove the squares
  let squares = mainContainer.querySelectorAll("div");
  for (let square of squares) {
    mainContainer.removeChild(square);
  }
  // Resets the grid-template and adds a temporary div to act as a block
  mainContainer.style = "grid-template: 980px / 980px";
  let square = document.createElement("div");

  // Adds the square/div to the main container and gives a class name with a predefined style
  mainContainer.appendChild(square);
  mainContainer.querySelector("div").classList.add("square");
}

// Adds event listener to button to listen for click to start the generating grid function
let generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", genGridSize);

// Adds event listener to button to listen for click to start the generating grid function
let removeButton = document.querySelector("#reset");
removeButton.addEventListener("dblclick", remGrid);

// To-Do's for future development:

// Style the site and make it responsive
// 
// onGOING ! -> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ->
// 
// ADD dark theme
// 
// onGOING ! -> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ->
// 
// Make it multiplayer :))
// 
// onGOING ! -> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ->
// 
