const form = document.querySelector("form");

form.addEventListener("submit", loginSubmit);
function loginSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const user = {
    email,
    password,
  };
  user.email = email.value;
  user.password = password.value;
  console.log(user);
  event.currentTarget.reset();
}
