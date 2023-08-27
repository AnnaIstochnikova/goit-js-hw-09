'use strict';

const delayInput = document.querySelector('.delay');
const step = document.querySelector('.delay--step');
const amount = document.querySelector('.amount');
const submitBtn = document.querySelector('.button--submit');
const form = document.querySelector('.form');

let delayValue = 0;
let delayStepValue = 0;
let amountValue = 0;

function valueFromUser(e) {
  e.preventDefault();

  delayValue = parseInt(delayInput.value);
  delayStepValue = parseInt(step.value);
  amountValue = parseInt(amount.value);
  createPromises();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
      }
    }, delay);
  });
}

function createPromises() {
  const promiseArr = [];

  for (let i = 1; i <= amountValue; i++) {
    const promiseDelay = delayValue + (i - 1) * delayStepValue;
    promiseArr.push({
      promise: createPromise(`Promise number ${i}`, promiseDelay),
      delay: promiseDelay,
    });
  }

  Promise.allSettled(promiseArr.map(p => p.promise)).then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(
          `✅ Fulfilled promise ${index + 1} in ${promiseArr[index].delay}ms`
        );
      } else {
        console.log(`❌ Rejected promise ${index + 1}`);
      }
    });
  });
}

submitBtn.addEventListener('click', valueFromUser);
