import "./index.css";

let timeText = document.querySelector(".time");
let modeButton = document.querySelector(".mode");
let increaseButton = document.querySelector(".increase");
let lightButton = document.querySelector(".light");

let currentTime = new Date();
let hourIsEdited = false;
let minuteIsEdited = false;
let hoursAdded = 0;
let minutesAdded = 0;

/**
 * Update the text field with the current value
 */
function updateTime() {
  currentTime = new Date();
  currentTime.setHours(currentTime.getHours() + hoursAdded);
  currentTime.setMinutes(currentTime.getMinutes() + minutesAdded);
  timeText.textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}

/**
 * Edit the displayed time
 */
function timeEdit() {
  if (!hourIsEdited && !minuteIsEdited) {
    hourIsEdited = true;
  } else if (hourIsEdited && !minuteIsEdited) {
    hourIsEdited = false;
    minuteIsEdited = true;
  } else {
    hourIsEdited = false;
    minuteIsEdited = false;
  }
}

/**
 * Increase the time by hour and minute
 */
function increaseTime() {
  if (hourIsEdited) {
    hoursAdded++;
  } else if (minuteIsEdited) {
    minutesAdded++;
  }
}

modeButton.addEventListener("click", timeEdit);
increaseButton.addEventListener("click", increaseTime);

setInterval(updateTime, 1000);
