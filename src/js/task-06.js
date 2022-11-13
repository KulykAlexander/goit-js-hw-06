const validetionInput = document.querySelector("#validation-input");

validetionInput.addEventListener("blur", () => {
  if (validetionInput.value.length === 6) {
    validetionInput.setAttribute("#validation-input.valid");
  } else {
    validetionInput.setAttribute("#validation-input.invalid");
  }
});
