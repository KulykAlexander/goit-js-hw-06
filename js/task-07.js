const control = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

control.addEventListener("input", (eve) => {
  textSize.style.fontSize = eve.currentTarget.value + "px";
});
