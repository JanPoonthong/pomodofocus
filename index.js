function start() {
  document.querySelector(".start").classList.add("button-start-click");
  document.querySelector(".start").innerHTML = "STOP";
}

function pomodoroTimer() {
  document.querySelector(".timer-break").className = "timer-break";
  document.querySelector(".timer-pomodoro").classList.add("timer-button-click");
}

function breakTimer() {
  document.querySelector(".timer-pomodoro").className = "timer-pomodoro";
  document.querySelector(".timer-break").classList.add("timer-button-click");
}
