import {addHours, intervalToDuration } from 'https://cdn.skypack.dev/date-fns';
const hoursBox = document.querySelector(".offer-of-the-month__time-hours");
const minutesBox = document.querySelector(".offer-of-the-month__time-minutes");
const secondsBox = document.querySelector(".offer-of-the-month__time-seconds");
const saleEndDate = addHours(new Date(), 5);

function counter() {
  const currentDate = new Date();

  const durationLeft = intervalToDuration({ start: currentDate, end: saleEndDate });
  
  const hours = durationLeft.hours;
  const minutes = durationLeft.minutes;
  const seconds = durationLeft.seconds;


  hoursBox.textContent = hours;
  minutesBox.textContent = minutes;
  secondsBox.textContent = seconds;
}

setInterval(counter, 1000);
