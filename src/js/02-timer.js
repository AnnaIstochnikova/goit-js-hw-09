'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('.button--start--timer');
const dateTimePicker = document.querySelector('.datetime-picker');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;

let selectedDate = new Date();
let intervalCount;

const picker = flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    const dateNow = new Date();

    if (selectedDate > dateNow) {
      startBtn.disabled = false;
      updateCountdown(selectedDate);
    } else {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
});

startBtn.addEventListener('click', () => {
  if (selectedDate > new Date()) {
    startBtn.disabled = true;
    intervalCount = setInterval(() => counter(selectedDate), 1000);
    updateCountdown(selectedDate);
  }
});

function counter(targetDate) {
  const currentDate = new Date();
  const remainingTime = targetDate - currentDate;

  if (remainingTime > 0) {
    const timeObject = convertMs(remainingTime);

    dataDays.innerHTML = addLeadingZero(timeObject.days);
    dataHours.innerHTML = addLeadingZero(timeObject.hours);
    dataMinutes.innerHTML = addLeadingZero(timeObject.minutes);
    dataSeconds.innerHTML = addLeadingZero(timeObject.seconds);
  } else {
    clearInterval(intervalCount);
    dataDays.innerHTML = '00';
    dataHours.innerHTML = '00';
    dataMinutes.innerHTML = '00';
    dataSeconds.innerHTML = '00';
  }
}

function updateCountdown(targetDate) {
  const currentDate = new Date();
  const remainingTime = targetDate - currentDate;

  if (remainingTime > 0) {
    const timeObject = convertMs(remainingTime);

    dataDays.innerHTML = addLeadingZero(timeObject.days);
    dataHours.innerHTML = addLeadingZero(timeObject.hours);
    dataMinutes.innerHTML = addLeadingZero(timeObject.minutes);
    dataSeconds.innerHTML = addLeadingZero(timeObject.seconds);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(num) {
  return num.toString().padStart(2, '0');
}
