const spanColor = document.querySelector('.color');
const button = document.querySelector('button');
const bodyColor = document.querySelector('body')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


button.addEventListener('click', changeColor)

function changeColor() {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
}
