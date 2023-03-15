const hoursBox = document.querySelector(".offer-of-the-month__time-hours");
const minutesBox = document.querySelector(".offer-of-the-month__time-minutes");
const secondsBox = document.querySelector(".offer-of-the-month__time-seconds");

const saleEndDate = new Date().getTime() + 5 * 60 * 60 * 1000;
const MS_PER_SECONDS = 1000 * 60
const MS_PER_MINUTES = MS_PER_SECONDS * 60
const MS_PER_DAY = MS_PER_MINUTES * 24

function counter() {
  const currentDate = new Date().getTime();
  const timeRemaining = saleEndDate - currentDate;
  const hours = Math.floor((timeRemaining % MS_PER_DAY) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % MS_PER_MINUTES) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % MS_PER_SECONDS) / 1000);


  hoursBox.textContent = hours;
  minutesBox.textContent = minutes;
  secondsBox.textContent = seconds;
}

setInterval(counter, 1000);
