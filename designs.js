// Gets values for height and width from form. Calls makeGrid:
document.getElementById('sizePicker').onsubmit = function(){
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
};

// makeGrid function:
function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';
        // Loop over each row. Creates row with class id row+i
    for (let i = 0; i < height; i++){
        grid += '<tr class="row-' + i + '">';
        // Inner loop for each cell. creates cell with class id row+i-cellj
        for (let j = 0; j < width; j++){
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        };
        grid += '</tr>';
    };
    // Adds grid into table element (pixelCanvas):
    table.innerHTML = grid;
    // Calls click event function to add color:
    addClickEventToCells();
};

// Returns color by event listener:
const colorPicker = document.getElementById("colorPicker");
let cellColor = colorPicker.value;
colorPicker.addEventListener("input", function() {
    cellColor = colorPicker.value;
    }, false);

//  Adds color by click event function:
function addClickEventToCells() {
const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click",  function(event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = cellColor;
        });
    };
};
  