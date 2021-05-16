const startSound = document.getElementById("start-sound");
const stopSound = document.getElementById("stop-sound");
const reachZeroSound = document.getElementById("reach-zero-sound");
const timerFromHtml = document.getElementById("timer");
const startButton = document.querySelector(".start");

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
  timerFromHtml.innerHTML = minutes.toString() + ":" + second;
  if (second < 10) {
    timerFromHtml.innerHTML = minutes.toString() + ":" + "0" + second;
  }
  checkAferZero();
}

function playSound(mp3Sound) {
  mp3Sound.pause();
  mp3Sound.currentTime = 0;
  mp3Sound.play();
}

function checkAferZero() {
  if (second < 01) {
    if (minutes === 0 && second === 0) {
      playSound(reachZeroSound);
      window.clearInterval(interval);
    } else {
      second = 59;
      minutes--;
      timerFromHtml.innerHTML = minutes.toString() + ":" + second;
    }
  }
}

function resetTimerAndStartButton() {
  window.clearInterval(interval);
  startButton.className = "start";
  startButton.innerHTML = "START";
}

function pomodoroTimer() {
  resetTimerAndStartButton();
  clicked = false;
  timerFromHtml.innerHTML = "60:00";
  second = 60;
  minutes = 59;
}

function breakTimer() {
  resetTimerAndStartButton();
  clicked = false;
  timerFromHtml.innerHTML = "10:00";
  second = 60;
  minutes = 9;
}

function timerStart() {
  startButton.classList.add("button-start-click");
  startButton.innerHTML = "STOP";
  playSound(startSound);
  interval = window.setInterval(secondTimer, 1000);
}

function timerStop() {
  resetTimerAndStartButton();
  playSound(stopSound);
}

if (document.getElementById("break").checked) {
  breakTimer();
}
