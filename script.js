//create new grid based on inputted size
function createNewGrid(size) {
  let newBody = document.body;
  let newContainer = document.querySelector(".container");
  let newRows = size;
  let newColumns = size;

  for (let i = 0; i < newRows; i++) {
    for (let j = 0; j < newColumns; j++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("grid-cell");
      newContainer.appendChild(newSquare);
      newBody.appendChild(newContainer);
    }
  }
  let newCells = document.querySelectorAll(".grid-cell");

  newCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.setAttribute("style", "background-color: blue;");
    });
  });
}

//remove the initial grid
function removeGrid() {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.parentNode.removeChild(cell);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let body = document.body;
  let container = document.querySelector(".container");
  let rows = 16;
  let columns = 16;

  //creating initial grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let square = document.createElement("div");
      square.classList.add("grid-cell");
      container.appendChild(square);
      body.appendChild(container);
    }
  }

  //setting up hover effect
  let cells = document.querySelectorAll(".grid-cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.setAttribute("style", "background-color: blue;");
    });
  });

  //prompt user to change grid size on button click
  let button = document.querySelector(".btn");
  button.addEventListener("click", () => {
    let gridSize = prompt(
      "Please enter the number of squares per side for the new grid (2-100):"
    );
    if (gridSize >= 2 && gridSize <= 100) {
      removeGrid();
      createNewGrid(gridSize);
    }
  });
});
