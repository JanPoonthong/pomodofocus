let clicked = false;

function start() {
  document.querySelector(".start").classList.add("button-start-click");
  document.querySelector(".start").innerHTML = "STOP";
  if (clicked) {
    document.querySelector(".start").className = "start";
    document.querySelector(".start").innerHTML = "START";
  }
  clicked = !clicked;
}
