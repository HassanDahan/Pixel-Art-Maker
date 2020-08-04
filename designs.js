
const colorPicker = document.querySelector("#colorPicker");   // select color input
const rowsNumber = document.querySelector("#inputHeight");   //  select number of rows from the user
const cellsNumber = document.querySelector("#inputWidth");  //   select number of cells from the user
const pixelCanvas = document.querySelector("#pixelCanvas");  //  select the pixel canvas (the table)
const form = document.querySelector("#sizePicker");          // select the form

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  for (let i = 0; i < rowsNumber.value; i++) {
    const row = pixelCanvas.insertRow(0);   // TODO: create the rows
    for (let j = 0; j < cellsNumber.value; j++) {
      row.insertCell(0);                   // TODO: create the cells
    }
  }
}

form.addEventListener("submit", function(event) {
  pixelCanvas.innerHTML = '';   // TODO: reset the table
  event.preventDefault();      // TODO: delete the default action
  makeGrid();
});

pixelCanvas.addEventListener('click', function(event) {
  if (event.target.nodeName === 'TD') { // TODO: check if the user clicks on the table
    // the event color (the color on the table) is the same as the user choice
    event.target.style.backgroundColor = colorPicker.value;
  }
});
