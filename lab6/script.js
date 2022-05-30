const table = document.querySelector('#number-table');
const clickColorInput = document.querySelector('#click-color-input');
const doubleclickColorInput = document.querySelector('#doubleclick-color-input');
const submitButton = document.querySelector('.submit-button');
const form = document.querySelector('.formbox');
const regularExpressions = {
  fullName: /^[А-Я][а-я]{3,}\s[А-Я]\.\s[А-Я]\.$/,
  idCard: /^[A-Z]{2}\s№\d{6}$/,
  birthDate: /^\d{4}\-\d{2}\-\d{2}$/,
  address:/^м\.\s[А-Я][а-я]{3,}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.com$/,
}
const validate = (field, regex) => regex.test(field.value) ? field.className = '' : field.className = 'not-valid';
const root = document.documentElement;
const currentVariant = 27;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#fullNameInfo').textContent = document.querySelector('#name-input').value;
  document.querySelector('#idCardInfo').textContent = document.querySelector('#id-card-input').value;
  document.querySelector('#birthDateInfo').textContent = document.querySelector('#date-input').value;
  document.querySelector('#addressInfo').textContent = document.querySelector('#address-input').value;
  document.querySelector('#emailInfo').textContent = document.querySelector('#email-input').value;
});

for (let i = 0; i < 6; i++) {
  const row = document.createElement('tr');
  const firstColorizedRow = Math.ceil(currentVariant / 6);

  for (let j = 0; j < 6; j++) {
    const cell = document.createElement('td');
    const cellNumber = 6 * i + (j + 1);

    if (cellNumber === currentVariant) {
      cell.onmouseover = () => cell.style.backgroundColor = `#${Math.floor(Math.random() * (256 ** 3)).toString(16)}`;
      cell.onclick = () => clickColorInput.click();
      cell.ondblclick = () => doubleclickColorInput.click();
      clickColorInput.addEventListener('input', ({ target }) => cell.style.backgroundColor = target.value);
      doubleclickColorInput.addEventListener('input', ({ target }) => root.style.setProperty('--row-color', target.value));
    }
    cell.textContent = cellNumber;
    row.appendChild(cell);
  }
  if ((i + 1 >= firstColorizedRow) && (firstColorizedRow % 2 === (i + 1) % 2)) row.className = 'colorisedRow'

  table.appendChild(row);
}

document.querySelectorAll('form input').forEach((item) => item.addEventListener('keyup', ({ target }) => {
    validate(target, regularExpressions[target.attributes.name.value]);
    if (document.querySelectorAll('.not-valid').length) disableButton();
    else enableButton();
  }
));

const disableButton = () => {
  submitButton.disabled = true;
  submitButton.value = 'Some fields are invalid';
  submitButton.className = 'disabled submit-button';
}

const enableButton = () => {
  submitButton.disabled = false;
  submitButton.value = 'Save';
  submitButton.className = 'submit-button';
}
