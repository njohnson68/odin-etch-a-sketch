document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const rows = 16;
  const columns = 16;

  //creating grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let square = document.createElement("div");
      square.classList.add("grid-cell");
      body.appendChild(square);
    }
  }

  //setting up hover effect
  const cells = document.querySelectorAll(".grid-cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.setAttribute("style", "background-color: blue;");
    });
  });
});
