
let timerSeconds = 0;
let timer = null;

function handlePlus() {
  timerSeconds = timerSeconds + 5 * 60;
  handleHtml();
}

function handleMinus() {
  if (timerSeconds > 5 * 60) {
    timerSeconds = timerSeconds - 5 * 60;
  } else {
    timerSeconds = 0;
  }
  handleHtml();
}

function handleHtml() {
  let timesInMinutes = String(Math.floor(timerSeconds / 60));
  let restoSeconds = String(timerSeconds % 60);
  document.querySelector("#seconds").textContent = restoSeconds.padStart(
    2,
    "0"
  );

  document.querySelector("#minutes").textContent = timesInMinutes.padStart(
    2,
    "0"
  );
}

function onPlay() {
  if (timer === null) {
    timer = setInterval(function () {
      if (timerSeconds === 0) {
        onStop();
      } else {
        timerSeconds = timerSeconds - 1;
        handleHtml();
      }
    }, 1000);
  }
}

function onStop() {
  clearInterval(timer);
  timer = null;
}
