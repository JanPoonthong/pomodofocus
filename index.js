let clicked = false;
let minutes = 59;
let second = 60;
let interval = 0;
const startSound = document.getElementById("start-sound");
const stopSound = document.getElementById("stop-sound");
const reachZeroSound = document.getElementById("reach-zero-sound");

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
  if (second < 10) {
    document.getElementById("timer").innerHTML =
      minutes.toString() + ":" + "0" + second;
  }
  checkAferZero();
}

function checkAferZero() {
  if (second < 01) {
    if (minutes === 0 && second === 0) {
      reachZeroSound.pause();
      reachZeroSound.currentTime = 0;
      reachZeroSound.play();
      window.clearInterval(interval);
    } else {
      second = 59;
      minutesTimer();
    }
  }
}

function minutesTimer() {
  minutes--;
  document.getElementById("timer").innerHTML =
    minutes.toString() + ":" + second;
}

function pomodoroTimer() {
  window.clearInterval(interval);
  document.querySelector(".start").className = "start";
  document.querySelector(".start").innerHTML = "START";
  clicked = false;
  document.getElementById("timer").innerHTML = "60:00";
  second = 60;
  minutes = 59;
}

function breakTimer() {
  window.clearInterval(interval);
  document.querySelector(".start").className = "start";
  document.querySelector(".start").innerHTML = "START";
  clicked = false;
  document.getElementById("timer").innerHTML = "10:00";
  second = 60;
  minutes = 9;
}

function timerStart() {
  document.querySelector(".start").classList.add("button-start-click");
  document.querySelector(".start").innerHTML = "STOP";
  startSound.pause();
  startSound.currentTime = 0;
  startSound.play();
  interval = window.setInterval(secondTimer, 1000);
}

function timerStop() {
  window.clearInterval(interval);
  document.querySelector(".start").className = "start";
  document.querySelector(".start").innerHTML = "START";
  stopSound.pause();
  stopSound.currentTime = 0;
  stopSound.play();
}

if (document.getElementById("break").checked) {
  breakTimer();
}
