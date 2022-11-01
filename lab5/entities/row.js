class Row {
  cells = [];

  constructor() {
    this.rowElement = document.createElement('tr');
  }

  addCell(cell) {
    this.cells.push(cell);
    this.rowElement.appendChild(cell.cellElement);
  }

  makeColorized() {
    this.rowElement.className = 'colorisedRow';
  }
}

