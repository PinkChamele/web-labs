class TableBuilder {
  rows = [];

  constructor(tableElement, rowsCount, cellsCount) {
    this.tableElement = tableElement;
    this.rowsCount = rowsCount;
    this.cellsCount = cellsCount;
  }

  compile() {
    for (let rowNumber = 0; rowNumber < this.rowsCount; rowNumber++) {
      const row = new Row();
    
      for (let cellNumberInRow = 0; cellNumberInRow < this.cellsCount; cellNumberInRow++) {
        const cell = new Cell();
        const cellNumber = this.cellsCount * rowNumber + (cellNumberInRow + 1);

        cell.setTextContent(cellNumber);
        if (cellNumber === this.activeCellNumber) {
          this.activeCell = cell;
          this.activeCell.setOnClickListener(() => this.clickColorInput?.click());
          this.activeCell.setOnDoubleClickListener(() => this.doubleclickColorInput?.click());
          this.activeCell.setOnHoverListener(() => this.activeCell.setColor(getRandColor()));
        }
        row.addCell(cell);
      }
      if (
        (rowNumber + 1 >= this.firstColorizedRow)
        && (this.firstColorizedRow % 2 === (rowNumber + 1) % 2)
      ) {
        row.makeColorized();
      }
      this.addRow(row);
    }
  }

  setActiveCellNumber(cellNumber) {
    this.activeCellNumber = cellNumber;

    return this;
  }

  setFirstColorizedRow(rowNumber) {
    this.firstColorizedRow = rowNumber;

    return this;
  }

  setClickInput(input) {
    this.clickColorInput = input;

    return this;
  }

  setDoubleClickInput(input) {
    this.doubleclickColorInput = input;

    return this;
  }

  addRow(row) {
    this.rows.push(row);
    this.tableElement.appendChild(row.rowElement);

    return this;
  }

  setOnClickActiveCell(callback) {
    this.clickColorInput?.addEventListener('input', (event) => callback(this.activeCell, event));

    return this;
  }

  setOnDoubleClickActiveCell(callback) {
    this.doubleclickColorInput?.addEventListener('input', (event) => callback(this.activeCell, event));

    return this;
  }
}
