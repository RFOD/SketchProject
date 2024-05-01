// Initializes the nr of rows and columns
let nrOfRows ;
let nrOfColumns ;
let nrOfSquares;
// Initializes the main div as an variable
let mainContainer = document.querySelector("#main");

// Creates a function that gets the Grid Size and updates the sketchpad
function genGridSize() {

  // Loops to remove the squares inside a node list
	let squares = mainContainer.querySelectorAll("div");
	for (let square of squares) 
	{
		mainContainer.removeChild(square);
  	}
  
  // Prompts the nr of rows and nr of columns and checks if they are the correct data type [Number - in my case]
  do {
	nrOfRows = prompt("Input how many rows you want: ");
  } while (isNaN(nrOfRows));
  
  do {
	nrOfColumns = prompt("Input how many columns you want: ");
  } while (isNaN(nrOfColumns));

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
}

// Resets the grid to a preset style
function remGrid() {

    console.log("Shit be working!")

// Calculates the needed amount of squares
    let nrOfSquares = nrOfColumns * nrOfRows;

// Loops to remove the squares
    for (let j = 0; j < nrOfSquares; j++) 
  {
	let square = mainContainer.querySelector("div");
	mainContainer.removeChild(square);
  }
// Resets the grid-template and adds a temporary div to act as a block
  mainContainer.style = "grid-template: 980px / 980px";
  square = document.createElement("div");

// Adds the square/div to the main container and gives a class name with a predefined style
  mainContainer.appendChild(square);
  mainContainer.querySelector("div").classList.add("square")
}

// Adds event listener to button to listen for click to start the generating grid function
let generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", genGridSize);

// Adds event listener to button to listen for click to start the generating grid function
let removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", remGrid);

// To-Do for tomorrow:

// U have to make it so it is preseted to 16x16 and when its seted by the button it resets the current styles and removes the current squares...
// Make the button look better
// Add the necessary functionality, from here: https://www.theodinproject.com/lessons/foundations-etch-a-sketch
