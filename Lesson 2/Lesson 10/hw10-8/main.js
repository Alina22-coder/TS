"use strict";
// #kUSgFqWY
const inputNumberOfLines = document.createElement('input');
inputNumberOfLines.type = 'number';
inputNumberOfLines.placeholder = 'Enter the number of rows...';
const inputNumberOfCells = document.createElement('input');
inputNumberOfCells.type = 'number';
inputNumberOfCells.placeholder = 'Enter the number of cells...';
const inputCellContents = document.createElement('input');
inputCellContents.type = 'text';
inputCellContents.placeholder = 'Enter the cell content...';
const buttonTs = document.createElement('button');
buttonTs.innerText = 'Submit';
buttonTs.addEventListener('click', function () {
    const table = document.createElement('table');
    const numRows = parseInt(inputNumberOfLines.value);
    const numCols = parseInt(inputNumberOfCells.value);
    const cellContent = inputCellContents.value.trim();
    if (isNaN(numRows) || isNaN(numCols) || numRows < 1 || numCols < 1) {
        alert('Please enter valid numbers greater than zero.');
        return;
    }
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('td');
            cell.innerText = cellContent;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
});
document.body.append(inputNumberOfLines, inputNumberOfCells, inputCellContents, buttonTs);
