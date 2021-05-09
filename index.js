function start() {
  // TODO(jan): Remove box-shawdow when start button is press
  console.log("start");
  // TODO(jan): Doesn't add to id, instead it create new class
  document.querySelector("#start").classList.add("button-start-click");
}

function pomodoroTimer() {
  console.log("pomodoro");
  document.querySelector(".timer").classList.add("timer-button-click");
}

function breakTimer() {
  // TODO(jan): When break button is click the background-color appear on Pomodoro
  // TODO(jan): select query using Id but add class
  console.log("break");
  document.querySelector(".timer").classList.add("timer-button-click");
}
