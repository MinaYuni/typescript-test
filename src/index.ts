import "./index.css";
import { MyClass } from "./example-unit";

let timeText = document.querySelector(".time");
let modeButton = document.querySelector(".mode");
let increaseButton = document.querySelector(".increase");
let lightButton = document.querySelector(".light");

let currentTime = new Date();

/**
 * Update the text field with the current value
 */
function updateTime() {
  let currentTime = new Date();
  timeText.textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}

/**
 * Edit the displayed time
 */
function timeEdit() {}

modeButton.addEventListener("click", timeEdit);

setInterval(updateTime, 10);
