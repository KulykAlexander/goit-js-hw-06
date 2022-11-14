function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const widget = document.querySelector("body");
const color = document.querySelector("span");
const changeColor = document.querySelector("button");

function chengeBackgroundColor() {
  color.textContent = getRandomHexColor();
  widget.style.backgroundColor = getRandomHexColor();
}
changeColor.addEventListener("click", chengeBackgroundColor);
