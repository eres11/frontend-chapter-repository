const hoursBox = document.querySelector(".offer-of-the-month__time-hours");
const minutesBox = document.querySelector(".offer-of-the-month__time-minutes");
const secondsBox = document.querySelector(".offer-of-the-month__time-seconds");

const saleEndDate = new Date().getTime() + 5 * 60 * 60 * 1000;

function counter() {
  const currentDate = new Date().getTime();
  const timeRemaining = saleEndDate - currentDate;
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);


  hoursBox.innerHTML = hours;
  minutesBox.innerHTML = minutes;
  secondsBox.innerHTML = seconds;
}

setInterval(counter, 1000);
