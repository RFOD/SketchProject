// Creates a function that gets the Grid Size and updates the sketchpad
function genGridSize()
{
    console.log("Function is running!");

    // Prompts the nr of rows and nr of columns
    let nrOfRows = prompt("Input how many rows you want: ");
    let nrOfColumns = prompt("Input how many columns you want: ");

    // Calculates the neccesary nr of squares
    let nrOfSquares = nrOfRows * nrOfColumns;

    // Adds the grid-template to match the nr of rows and nr of columns
    document.querySelector("#main").style = `grid-template: repeat(${nrOfRows}, 1fr) / repeat(${nrOfColumns}, 1fr);`

    // Creates squares and appends them to the grid
    for (var i = 0; i < nrOfSquares; i++)
    {
        let square = document.createElement("div");
        square.classList.add("black");
        document.querySelector("#main").appendChild(square);
    }
}

// Adds event listener to button to listen for click to start the function
let button = document.querySelector("button");
button.addEventListener("click", genGridSize);

// To-Do for tomorrow: 

// U have to make it so it is preseted to 16x16 and when its seted by the button it resets the current styles and removes the current squares...
// Make the button look better
// Add the necessary functionality, from here: https://www.theodinproject.com/lessons/foundations-etch-a-sketch