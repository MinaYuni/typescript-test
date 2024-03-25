import "./index.css";

let watchContainer = document.querySelector(".watch");
let timeText = document.querySelector(".time");
let modeText = document.querySelector(".currentMode");
let modeButton = document.querySelector(".mode");
let increaseButton = document.querySelector(".increase");
let lightButton = document.querySelector(".light");
let resetButton = document.querySelector(".reset");

let currentTime = new Date();
let hourIsEdited = false;
let minuteIsEdited = false;
let hoursAdded = 0;
let minutesAdded = 0;

let isLightMode = true;

/**
 * Update the time text field with the current value
 */
function updateTime() {
  currentTime = new Date();
  currentTime.setHours(currentTime.getHours() + hoursAdded);
  currentTime.setMinutes(currentTime.getMinutes() + minutesAdded);
  timeText.textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}

/**
 * Change to edit mode for the time
 */
function timeEdit() {
  if (!hourIsEdited && !minuteIsEdited) {
    hourIsEdited = true;
    modeText.textContent = "Mode : Hour";
  } else if (hourIsEdited && !minuteIsEdited) {
    hourIsEdited = false;
    minuteIsEdited = true;
    modeText.textContent = "Mode : Minute";
  } else {
    hourIsEdited = false;
    minuteIsEdited = false;
    modeText.textContent = "Mode : Time";
  }
  updateTime();
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

/**
 * Change light mode to dark mode and vice versa
 */
function changeLightMode() {
  isLightMode = !isLightMode;
}

/**
 * Reset actual time to current time
 */
function resetTime() {
  hoursAdded = 0;
  minutesAdded = 0;
}

modeButton.addEventListener("click", timeEdit);
increaseButton.addEventListener("click", increaseTime);
lightButton.addEventListener("click", changeLightMode);
resetButton.addEventListener("click", resetTime);

setInterval(updateTime, 1000);
