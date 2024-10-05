const start = document.getElementById("start");

let interval;
let time = 25 * 60;
let breakTime = 5 * 60;
let breakInterval;

start.addEventListener("click", startPomodoroTimer);

const stop = document.getElementById("stop");
stop.addEventListener("click", stopPomodoroTimer);

function startPomodoroTimer() {
  const timer = document.getElementById("timer");

  start.classList.add("hidden");
  stop.classList.remove("hidden");
  interval = setInterval(() => {
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timer.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    if (time === 0) {
      stopPomodoroTimer();
      startBreakTimer();
    }
  }, 1000);
}

function stopPomodoroTimer() {
  const stop = document.getElementById("stop");
  const start = document.getElementById("start");
  if (typeof interval !== "undefined") {
    clearInterval(interval);
    time = 25 * 60;
  }
  if (typeof breakInterval !== "undefined") {
    clearInterval(breakInterval);
    breakTime = 5 * 60;
  }
  stop.classList.add("hidden");
  start.classList.remove("hidden");
}

function startBreakTimer() {
  const timer = document.getElementById("timer");

  start.classList.add("hidden");
  stop.classList.remove("hidden");
  breakInterval = setInterval(() => {
    breakTime--;
    const minutes = Math.floor(breakTime / 60);
    const seconds = breakTime % 60;
    timer.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    if (breakTime === 0) {
      stopPomodoroTimer();
      startPomodoroTimer();
    }
  }, 1000);
}
