// export default
// const user = {
//   email,
//   password,
// };
// const userEmail = document.querySelector("email");
// const userPasswor = document.querySelector("password");
// const btn = document.querySelector("button");
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
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
