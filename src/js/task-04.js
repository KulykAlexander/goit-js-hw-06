let counterValue = 0;
const counterValueSpan = document.querySelector("span");
const decrement = document.querySelector('button[data-action="decrement]');
const increment = document.querySelector('button[data-action="increment]');

const decrementClick = () => {
  counterValue -= 1;
  counterValueSpan.textContent = `${counterValue}`;
};
const incrementClick = () => {
  counterValue += 1;
  counterValueSpan.textContent = `${counterValue}`;
};
decrement.addEventListener("click", decrementClick);
increment.addEventListener("click", incrementClick);
