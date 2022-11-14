const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function inputChange(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    return (nameOutput.textContent = `Anonimys`);
  }
}
nameInput.addEventListener("input", inputChange);
