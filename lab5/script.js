const eighth = document.getElementById('eighth');
const ninth = document.querySelector('#ninth');
const picture = document.getElementById('picture');
const fileInput = document.getElementById('file-input');
const addButton = document.getElementById('add-button');
const increaseButton = document.getElementById('increase-button');
const reduceButton = document.getElementById('reduce-button');
const deleteButton = document.getElementById('delete-button');

const swapColors = () => {
  const ninthClassName = ninth.className;

  ninth.className = eighth.className;
  eighth.className = ninthClassName;
};

const handleFile = ([file]) => {
  if (!file.type.startsWith('image/')) { return; }

  const reader = new FileReader();

  picture.file = file;
  reader.onload = ({ target: { result }}) => {
    picture.src = result;
    picture.className = 'animated default-display';
  }
  reader.readAsDataURL(file);
};

let scale = 0;

eighth.onclick = () => {
  eighth.className = 'animated blue-background';
  eighth.onclick = swapColors;
};
ninth.onclick = () => {
  ninth.className = 'animated yellow-background';
  ninth.onclick = swapColors;
};

increaseButton.onclick = () => { if (scale < 50) picture.style = `--upscale: ${scale += 10}%`; };
reduceButton.onclick = () => { if (scale > -50) picture.style = `--upscale: ${scale -= 10}%`; };
addButton.onclick = () => fileInput.click();
deleteButton.onclick = () => {
  picture.className = 'not-displayed';
  fileInput.value = '';
};
