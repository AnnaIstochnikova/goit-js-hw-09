'use strict';

const startBtn = document.querySelector('.button--start');
const stopBtn = document.querySelector('.button--stop');
const body = document.querySelector('body');
let timerId = null;
console.log(body);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  stopBtn.disabled = false;
  startBtn.disabled = true;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
});
