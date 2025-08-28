// #kUSgFqWY
const inputNumberOfLines:HTMLInputElement = document.createElement('input');
inputNumberOfLines.type = 'number';
inputNumberOfLines.placeholder = 'Enter the number of rows...'

const inputNumberOfCells:HTMLInputElement = document.createElement('input');
inputNumberOfCells.type = 'number';
inputNumberOfCells.placeholder = 'Enter the number of cells...'

const inputCellContents:HTMLInputElement = document.createElement('input');
inputCellContents.type = 'text';
inputCellContents.placeholder = 'Enter the cell content...'

const buttonTs:HTMLButtonElement = document.createElement('button');
buttonTs.innerText = 'Submit';

buttonTs.addEventListener('click', function ():void {
    const table:HTMLTableElement = document.createElement('table');

    const numRows:number = parseInt(inputNumberOfLines.value);
    const numCols:number = parseInt(inputNumberOfCells.value);
    const cellContent:string = inputCellContents.value.trim();

    if (isNaN(numRows) || isNaN(numCols) || numRows < 1 || numCols < 1) {
        alert('Please enter valid numbers greater than zero.');
        return;
    }

    for (let i:number = 0; i < numRows; i++) {
        const row:HTMLTableRowElement = document.createElement('tr');

        for (let j:number = 0; j < numCols; j++) {
            const cell:HTMLTableCellElement = document.createElement('td');
            cell.innerText = cellContent;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
})


document.body.append(inputNumberOfLines, inputNumberOfCells, inputCellContents, buttonTs);