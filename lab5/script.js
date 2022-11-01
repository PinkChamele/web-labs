const currentVariant = 27;

function createTable() {
  const tableSize = 6;
  const tableBuilder = new TableBuilder(
    document.querySelector('#number-table'),
    tableSize,
    tableSize,
  );

  tableBuilder
    .setFirstColorizedRow(Math.ceil(currentVariant / tableSize))
    .setActiveCellNumber(currentVariant)
    .setClickInput(document.querySelector('#click-color-input'))
    .setDoubleClickInput(document.querySelector('#doubleclick-color-input'))
    .setOnClickActiveCell((activeCell, event) =>  {
      activeCell.setColor(event.target.value);
    })
    .setOnDoubleClickActiveCell((_activeCell, event) => {
      document.documentElement.style.setProperty('--row-color', event.target.value);
    })
    .compile();
}

function createForm() {
  const fullNameEntry = new FieldEntry(
    document.querySelector('#name-input'),
    document.querySelector('#fullNameInfo'),
    /^[А-Я][а-я]{3,}\s[А-Я]\.\s[А-Я]\.$/
  );
  const idCardEntry = new FieldEntry(
    document.querySelector('#id-card-input'),
    document.querySelector('#idCardInfo'),
    /^[A-Z]{2}\s№\d{6}$/
  );
  const birthDateEntry = new FieldEntry(
    document.querySelector('#date-input'),
    document.querySelector('#birthDateInfo'),
    /^\d{4}\-\d{2}\-\d{2}$/
  );
  const addressEntry = new FieldEntry(
    document.querySelector('#address-input'),
    document.querySelector('#addressInfo'),
    /^м\.\s[А-Я][а-я]{3,}$/,
  );
  const emailEntry = new FieldEntry(
    document.querySelector('#email-input'),
    document.querySelector('#emailInfo'),
    /^([a-z\d\.-]+)@([a-z\d-]+)\.com$/,
  );
  
  new Form(
    document.querySelector('.formbox'),
    document.querySelector('.submit-button'),
    [fullNameEntry, idCardEntry, birthDateEntry, addressEntry, emailEntry],
  );
}

window.onload = () => {
  createTable();
  createForm();
}
