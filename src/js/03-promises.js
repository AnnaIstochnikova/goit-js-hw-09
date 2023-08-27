'use strict';

const delay = document.querySelector('.delay');
const step = document.querySelector('.delay--step');
const amount = document.querySelector('.amount');
const submitBtn = document.querySelector('.button--submit');
const form = document.querySelector('.form');

let delayValue = 0;
let delayStepValue = 0;
let amountValue = 0;

function valueFromUser(e) {
  e.preventDefault();

  delayValue = parseInt(delay.value);
  delayStepValue = parseInt(step.value);
  amountValue = parseInt(amount.value);
  createPromise();
}

submitBtn.addEventListener('click', valueFromUser);
submitBtn.addEventListener('submit', createPromise);

function createPromise() {
  const shouldResolve = Math.random() > 0.3;
  console.log('Delay:', delayValue);
  console.log('Delay Step:', delayStepValue);
  console.log('Amount:', amountValue);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
      }
    }, delayValue);
  });
}

createPromise()
  .then(({ position, delayValue }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delayValue}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delayValue}ms`);
  });

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   console.log(position);
//   console.log(delay);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve('Success! Value passed to resolve function');
//       } else {
//         reject('Error! Error passed to reject function');
//       }
//     }, getInputValue);
//   });
// }

// console.log(createPromise(2, 6));
