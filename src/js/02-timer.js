'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('.button--start--timer');
const flatpickr = require('flatpickr');
const dateTimePicker = document.querySelector('#datetime-picker');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let value = document.querySelectorAll('.value');
// let count = 0;
// for (val of value) {
//   val.textContent = count;
// }
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const dateNow = new Date();
    if (selectedDates[0] > dateNow) {
      startBtn.disabled = false;
    }
    if (selectedDates[0] < dateNow) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },

  onChange(selectedDates) {
    const dateNow = new Date();
    const chosenDate = selectedDates[0].getTime();
    const timeLeftConverted = convertMs(chosenDate - dateNow);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    dataDays.textContent = timeLeftConverted.days;
    dataHours.textContent = timeLeftConverted.hours;
    dataMinutes.textContent = timeLeftConverted.minutes;
    dataSeconds.textContent = timeLeftConverted.seconds;
    console.log(timeLeftConverted.days * day * minute * second);

    startBtn.addEventListener('click', counter);

    function counter() {
      console.log('blahblah');
      const intervalCount = setInterval(function () {
        dataDays.textContent--;
        if (dataDays.textContent === 0) {
          console.log('000000000000');
        }
      }, timeLeftConverted.days * day * hour * minute * second);

      const intervalCount2 = setInterval(function () {
        dataHours.textContent--;
      }, timeLeftConverted.hours * minute * second);

      const intervalCount3 = setInterval(function () {
        dataMinutes.textContent--;
      }, timeLeftConverted.minutes * second);

      const intervalCount4 = setInterval(function () {
        dataSeconds.textContent--;
      }, timeLeftConverted.seconds * 1000);
    }
  },
};

flatpickr(dateTimePicker, options);

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

// startBtn.addEventListener('click', function () {
//   console.log('blahblah');
//   const intervalCount = setInterval(function () {
//     dataDays.textContent--;
//   }, 1000);
// });
