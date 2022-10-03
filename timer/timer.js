const timeCounter = document.getElementById("timeCounter");
const timeInput = document.getElementById("timeInput");

let mints = 0;
let secs = 0;
let hr = 0;

let displaySecs = 0;
let displayMints = 0;
let displayHr = 0;

//define a var to hold setInterval() function
let interval = null;
//  define a var to hold the status of stopwatch
let Status = "stopped";

// stopwatch() when to increment the next value;
function stopWatch() {
  secs++;
  // logic when to increment the next value
  if (secs / 60 === 1) {
    secs = 0;
    mints++;
    if (mints / 60 === 1) {
      mints = 0;
      hr++;
    }
  }

  //   If seconds,mints and hours are only one digit

  if (secs < 10) {
    displaySecs = "0" + secs.toString();
  } else {
    displaySecs = secs;
  }
  if (mints < 10) {
    displayMints = "0" + mints.toString();
  } else {
    displayMints = mints;
  }
  if (hr < 10) {
    displayHr = "0" + hr.toString();
  } else {
    displayHr = hr;
  }
  timeCounter.innerHTML = `${displayHr}:${displayMints}:${displaySecs}`;
}

function startStop() {
  if (Status === "stopped") {
    // start the stopwatch by calling the setInterval Function
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startBtn").innerHTML = "Stop";
    Status = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startBtn").innerHTML = "Start";
    Status = "stopped";
  }
}

function resetTimer() {
  window.clearInterval(interval);
  secs = 0;
  mints = 0;
  hr = 0;
  document.getElementById("timeCounter").innerHTML = "00:00:00";
  document.getElementById("startBtn").innerHTML = "Start";
}
