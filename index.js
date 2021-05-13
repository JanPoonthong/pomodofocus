let clicked = false;
let minutes = 59;
let second = 60;
let interval = 0;

function start() {
  if (clicked) {
    timerStop();
  } else {
    timerStart();
  }
  clicked = !clicked;
}

function secondTimer() {
  second--;
  document.getElementById("timer").innerHTML =
    minutes.toString() + ":" + second;
  if (second < 01) {
    second = 60;
    minutesTimer();
  }
}

function minutesTimer() {
  minutes--;
  document.getElementById("timer").innerHTML =
    minutes.toString() + ":" + second;
}

function pomodoroTimer() {
  timerStop();
  document.getElementById("timer").innerHTML = "60:00";
  second = 60;
  minutes = 59;
}

function breakTimer() {
  timerStop();
  document.getElementById("timer").innerHTML = "10:00";
  second = 60;
  minutes = 9;
}

function timerStart() {
  document.querySelector(".start").classList.add("button-start-click");
  document.querySelector(".start").innerHTML = "STOP";
  interval = window.setInterval(secondTimer, 1000);
}

function timerStop() {
  window.clearInterval(interval);
  document.querySelector(".start").className = "start";
  document.querySelector(".start").innerHTML = "START";
}
