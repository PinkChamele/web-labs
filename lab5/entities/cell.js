class Cell {
  constructor() {
    this.cellElement = document.createElement('td');
  }

  setColor(hex) {
    this.cellElement.style.backgroundColor = hex;
  }

  setTextContent(content) {
    this.cellElement.textContent = content;
  }

  setOnHoverListener(callback) {
    this.cellElement.onmouseover = callback;

    return this;
  }

  setOnClickListener(callback) {
    this.cellElement.onclick = callback;

    return this;
  }

  setOnDoubleClickListener(callback) {
    this.cellElement.ondblclick = callback;

    return this;
  }
}
