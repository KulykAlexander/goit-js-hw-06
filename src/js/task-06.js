const validetionInput = document.querySelector("#validation-input");

validetionInput.addEventListener("blur", () => {
  if (validetionInput.value.length === 6) {
    validetionInput.classList.remove("invalid");
    validetionInput.classList.add("valid");
  } else {
    validetionInput.classList.remove("valid");
    validetionInput.classList.add("invalid");
  }
});
